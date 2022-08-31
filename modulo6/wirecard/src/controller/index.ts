import { app } from './app';
import transactionRoute from '../routes/transactionRoute';

app.use('/transaction', transactionRoute);