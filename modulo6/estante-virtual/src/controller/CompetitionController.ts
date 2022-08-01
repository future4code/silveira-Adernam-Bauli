import { Request, Response } from 'express';
import CompetitionBusiness from '../business/CompetitionBusiness';
import { CreateCompetitionDTO } from '../types/createCompetitionDTO';


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
            const competitionId = await this.competitionBusiness.createCompetition(inputCompetitionDTO);

            res.status(200).send({ message: 'Competition created successfully!', competitionId });
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        };
    };

    finishCompetition = async (req: Request, res: Response): Promise<void> => {
        const competitionName: string = req.body.name;

        try {
            const finishDate = await this.competitionBusiness.finishCompetition(competitionName);

            res.status(200).send({ message: 'Competition finished successfully!', finishDate})
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        };
    };

    getRanking = async (req: Request, res: Response): Promise<void> => {
        const competitionName: string = req.body.competition;

        try {
            const ranking = await this.competitionBusiness.getRanking(competitionName);

            res.status(200).send({ message: 'Competition ranking at the moment:', ranking });
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        };
    };
}

