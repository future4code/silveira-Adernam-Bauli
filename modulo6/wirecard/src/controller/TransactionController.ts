import { Request, Response } from 'express';
import TransactionBusiness from '../business/TransactionBusiness';
import { TransactionDTO } from '../types/transactionDTO';

export default class TransactionController {
    constructor(
        private transactionBusiness: TransactionBusiness
    ) { }

    createTransaction = async (req: Request, res: Response) => {
        const {
            name,
            email,
            cpf,
            amount,
            type,
            card_brand,
            card_name,
            card_number,
            card_expiration_date,
            card_cvv
        } = req.body;

        const input: TransactionDTO = {
            name,
            email,
            cpf,
            amount,
            type,
            card_brand,
            card_name,
            card_number,
            card_expiration_date,
            card_cvv
        };

        try {
            const transaction = await this.transactionBusiness.create(input);

            res.status(201).send({ message: 'Payment made successfully', transaction });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            };

            res.status(500).send('Error.');
        };
    };

    getPayments = async (req: Request, res: Response) => {
        const { cpf, amount } = req.body;

        try {
            const transaction = await this.transactionBusiness
                .getTransaction(cpf, amount);

            res.status(200).send({
                message: 'Transaction status: ok.', transaction
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            };

            res.status(500).send('Signup error.');
        };
    };
};