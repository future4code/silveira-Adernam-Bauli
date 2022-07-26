import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { CreateCompetitionDTO } from "../types/createCompetitionDTO";


export default class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) { }

    createCompetition = async (req: Request, res: Response): Promise<void> => {
        const name: string = req.body.name;

        const inputCompetitionDTO: CreateCompetitionDTO = {
            name
        }

        try {
            const competitionId = await this.competitionBusiness.createPost(inputCompetitionDTO);

            res.status(200).send({ message: "Competition created successfully!", competitionId });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}

