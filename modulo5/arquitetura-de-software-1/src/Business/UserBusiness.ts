import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { compare, hash } from "../services/hashManager";
import { generateToken, getTokenData } from "../services/authenticator";
import { userInput, userLogin } from "../types/user";
import UserData from "../data/UserData";

export default class UserBusiness {

    async signUp(user: userInput) {

        const { name, nickname, email, password, role } = user;

        if (
            !name ||
            !nickname ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()

        const cypherPassword = await hash(password);

        const userData = new UserData()

        await userData.insertUser({
            id,
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        })

        const token: string = generateToken({
            id,
            role: role
        })

        return token;
    }

    async login(user: userLogin) {

        const { email, password} = user;

        if (
            !email ||
            !password
        ) {
            throw new Error('Preencha os campos "email" e "password"')
        }

        const logged = await new UserData().login(user.email);

        const comparePass = await compare(user.password, logged.password)

        if(comparePass) {
            throw new Error('Credenciais inválidas')
        }

        const token: string = generateToken({
            id: logged.id,
            role: logged.role
        })

        return token;

    }

}