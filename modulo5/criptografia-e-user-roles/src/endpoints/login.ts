import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { authenticationData, user } from "../types";

export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Por favor, preencha email e senha")
        }

        const [user] = await connection("Users").where({ email })

        const hashManager: HashManager = new HashManager()

        const passwordIsCorrect: boolean = hashManager.compareHash(
            password,
            user.password
        )

        if (!user || !passwordIsCorrect) {
            throw new Error("Credenciais de acesso são inválidas!")
        }

        const authenticator = new Authenticator()

        const payload: authenticationData = {
            id: user.id,
            role: user.role
        }

        const token = authenticator.generateToken(payload)

        res.status(201).send({ token })

    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
            res.status(500).send({ message: error.message })
        }
    }
}