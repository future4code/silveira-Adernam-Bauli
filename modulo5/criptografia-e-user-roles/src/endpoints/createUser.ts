import { Request, Response } from "express";
import connection from "../connection";
import { generateId } from "../services/idGenerator";
import { authenticationData, user } from "../types";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password, role } = req.body
        const userTableName = 'Users'

        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email', 'password' e 'role'")
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("A senha deve ter no mínimo 6 caracteres.")
        }

        const [user] = await connection(userTableName)
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error("Email já cadastrado")
        }

        const id: string = new generateId().generateId()

        const hashManager: HashManager = new HashManager()

        const senhaCriptografada = hashManager.createHash(password)

        const newUser: user = { id, email, password: senhaCriptografada, role }

        const payload: authenticationData = {
            id: newUser.id,
            role
        };

        const token = new Authenticator().generateToken(payload)

        await connection(userTableName)
            .insert(newUser)

        res.status(201).send({ token })

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.message })
            }
        }
    }
}

