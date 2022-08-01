import { Request, Response } from "express";
import connection from "../connection";
import { generateId } from "../services/idGenerator";
import { user } from "../types";
import {generateToken} from '../services/authenticator';

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body
      const userTableName = 'Users'

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
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
         throw new Error('Email já cadastrado')
      }

      const id: string = new generateId().generateId()

      const newUser: user = { id, email, password }

      const token = generateToken({
         id,
       });

      await connection(userTableName)
         .insert(newUser)

      res.status(201).send({ newUser })

   } catch (error: any) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}