import express from 'express';
import AthleteBusiness from '../business/AthleteBusiness';
import AthleteController from '../controller/AthleteController';
import AthleteData from '../data/AthleteData';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

const athleteRoute = express.Router();

const athleteBusiness = new AthleteBusiness(
    new AthleteData(),
    new IdGenerator()
);

const athleteController = new AthleteController(
    athleteBusiness
);

athleteRoute.post('/create', athleteController.createAthlete);

export default athleteRoute;