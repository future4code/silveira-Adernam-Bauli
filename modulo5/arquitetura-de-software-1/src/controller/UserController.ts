import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { userInput } from "../types/user";

export default class UserController {

    async signUp(req: Request, res: Response) {
        try {

            const { name, nickname, email, password, role } = req.body;

            const userBusiness = new UserBusiness();

            const newUser: userInput = {
                name,
                nickname,
                email,
                password,
                role
            }

            const token = await userBusiness.signUp(newUser)

            res.status(201).send({message: "Usuário criado com sucesso!", token})
        } catch (error: any) {
            console.log(error)
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

    async login(req: Request, res: Response) {
        try {

            const {email, password} = req.body;

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

}