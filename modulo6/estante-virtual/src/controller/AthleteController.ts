import { Request, Response } from 'express';
import UserBusiness from '../business/AthleteBusiness';
import { CreateAthleteDTO } from '../types/createAthleteDTO';

export default class UserController{
    constructor(
        private athleteBusiness: UserBusiness
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
            const athlete = await this.athleteBusiness.create(input)

            res.status(201).send({message: 'Athlete created successfully', athlete})
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send('Signup error.')
        }
    }
}

