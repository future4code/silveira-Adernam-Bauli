import express from 'express';
import CompetitionBusiness from '../business/CompetitionBusiness';
import CompetitionController from '../controller/CompetitionController';
import AthleteData from '../data/AthleteData';
import CompetitionData from '../data/CompetitionData';
import { IdGenerator } from '../services/IdGenerator';

const competitionRoute = express.Router();

const competitionBusiness = new CompetitionBusiness(
    new CompetitionData(),
    new AthleteData(),
    new IdGenerator()
);

const competitionController = new CompetitionController(
    competitionBusiness
);

competitionRoute.get('/ranking', competitionController.getRanking);
competitionRoute.post('/create', competitionController.createCompetition);
competitionRoute.post('/finish', competitionController.finishCompetition);

export default competitionRoute;