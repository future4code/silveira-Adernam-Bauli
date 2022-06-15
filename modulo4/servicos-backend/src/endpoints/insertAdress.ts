import { Request, Response } from "express"
import insertAddressDb from "../data/insertAddressDb"
import { getFullAddress } from "../services/getFullAddress"

export const insertAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const address = await getFullAddress(cep)

        if (!address) {
            throw new Error("Cep inválido")
        }

        await insertAddressDb(address)

        res.status(201).send("Endereço criado com sucesso.")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

