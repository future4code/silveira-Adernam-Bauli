import { app } from './app';
import athleteRoute from '../routes/athleteRoute';
import competitionRoute from '../routes/competitionRoute';
import competitionRankingRoute from '../routes/competitionRankingRoute'


app.use('/competition', competitionRoute);
app.use('/athlete', athleteRoute);
app.use('/ranking', competitionRankingRoute);