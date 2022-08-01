import express, { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersByType = async (req: Request, res: Response) => {
    try {
        if (!req.params.type) {
            throw new Error("Please check the type")
        }

        const searchType = await getTypes(req.params.type as string)
        res.status(200).send({ searchType })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export const getTypes = async (type: string) => {
    const resultado = await connection.raw(`
      SELECT * FROM aula49_exercicio
      WHERE type LIKE "${type}"
    `)
    return resultado[0]
}