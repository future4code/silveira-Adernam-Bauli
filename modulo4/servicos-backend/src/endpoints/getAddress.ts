import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress"

export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: result.data.gia,
            complemento: result.data.complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        res.send(address)
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        res.status(400).send(error.message)
    }
}