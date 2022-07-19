import { Request, Response } from "express";
import UserBusiness from "../business/AthleteBusiness";
import { CreateAthleteDTO } from "../types/signupInputDTO";

export default class UserController{
    constructor(
        private userBusiness: UserBusiness
    ){}

    createAthlete = async(req: Request, res: Response) =>{
        const {competition, name, value, unity} = req.body;

        const input: CreateAthleteDTO ={
            competition,
            name,
            value,
            unity
        }
        
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message: "Usuário cadastrado com sucesso", token})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const token: string = await this.userBusiness.login({email, password});
    
          res.status(200).send({ token });
        } catch (error: any) {
          res.status(400).send(error. sqlMessage || error.message);
        }
      };
}

