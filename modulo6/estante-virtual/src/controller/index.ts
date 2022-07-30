import { app } from './app';
import athleteRoute from '../routes/athleteRoute';
import competitionRoute from '../routes/competitionRoute';


app.use('/competition', competitionRoute);
app.use('/athlete', athleteRoute);