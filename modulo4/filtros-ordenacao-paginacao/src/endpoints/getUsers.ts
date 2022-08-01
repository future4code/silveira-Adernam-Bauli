import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name as string;

      const users = await selectAllUsers(name)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers(name: string): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio
      WHERE name LIKE "%${name}%";
   `)

   return result[0]
}