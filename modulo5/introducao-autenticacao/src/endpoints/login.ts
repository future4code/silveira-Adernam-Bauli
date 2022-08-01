import { Request, Response } from "express";
import connect from 'http2';
import connection from "../connection";
import { generateToken } from '../services/authenticator';
import { generateId } from "../services/idGenerator";
import { AuthenticationData, user } from "../types";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            throw new Error('Por favor, preencha os campos email e senha.')
        }

        const [user] = await connection('Users')
            .where({ email })

        if (!user || user.password !== password) {
            throw new Error('Credenciais de acesso inválidas.')
        }

        const token = generateToken({ id: user.id })

        res.status(200).send(token)
    } catch (error: any) {
        console.log(error)
        res.status(500).send({ error: error.message })
    }
}

