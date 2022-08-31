import express from 'express';
import TransactionBusiness from '../business/TransactionBusiness';
import TransactionController from '../controller/TransactionController';
import TransactionData from '../data/TransactionData';
import { IdGenerator } from '../services/IdGenerator';

const transactionRoute = express.Router();

const transactionBusiness = new TransactionBusiness(
    new TransactionData(),
    new IdGenerator()
);

const transactionController = new TransactionController(
    transactionBusiness
);

transactionRoute.post('/create', transactionController.createTransaction);
transactionRoute.get('/getstatus', transactionController.getPayments);

export default transactionRoute;