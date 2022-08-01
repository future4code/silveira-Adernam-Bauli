import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order as string;
        let sort = req.query.sort as string;

        if (sort !== "type" && sort !== "name") {
            sort = "email"
         }
  
         if (!order) {
            order = "ASC"
         }
         
        const users = await connection(`aula49_exercicio`)
        .orderBy(sort, order);

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}