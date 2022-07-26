import { Request, Response } from "express";
import CompetitionRankingBusiness from "../business/CompetitionRankingBusiness";


export default class CompetitionRankingController {
    constructor(
        private competitionRankingBusiness: CompetitionRankingBusiness
    ) { }

    createCompetition = async (req: Request, res: Response): Promise<void> => {
        const competitionName: string = req.body.competition;

        try {
            const ranking = await this.competitionRankingBusiness.getCompetitionRanking(competitionName);

            res.status(200).send({ message: "Competition ranking at the moment:", ranking });
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
};