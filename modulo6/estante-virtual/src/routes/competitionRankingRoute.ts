import express from 'express';
import CompetitionRankingBusiness from '../business/CompetitionRankingBusiness';
import CompetitionRankingController from '../controller/CompetitionRankingController';
import AthleteData from '../data/AthleteData';
import CompetitionData from '../data/CompetitionData';

const competitionRankingRoute = express.Router();

const competitionRankingBusiness = new CompetitionRankingBusiness(
    new CompetitionData(),
    new AthleteData()
);

const competitionRankingController = new CompetitionRankingController(
    competitionRankingBusiness
);

competitionRankingRoute.get('/', competitionRankingController.createCompetition);

export default competitionRankingRoute;