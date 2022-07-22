import express from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import CompetitionController from "../controller/CompetitionController";
import CompetitionData from "../data/CompetitionData";
import { IdGenerator } from "../services/IdGenerator";

const competitionRoute = express.Router();

const competitionBusiness = new CompetitionBusiness(
    new CompetitionData(),
    new IdGenerator()
);

const competitionController = new CompetitionController(
    competitionBusiness
);

competitionRoute.post("/create", competitionController.createCompetition);

export default competitionRoute;