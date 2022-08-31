import TransactionData from '../data/TransactionData';
import Transaction from '../model/Transaction';
import { IdGenerator } from '../services/IdGenerator';
import { TransactionDTO } from '../types/transactionDTO';


export default class TransactionBusiness {

    constructor(
        private transactionData: TransactionData,
        private idGenerator: IdGenerator
    ) { }

    create = async (input: TransactionDTO) => {
        let {
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
        } = input;

        if (
            !name ||
            !email ||
            !cpf ||
            !amount ||
            !type
        ) {
            throw new Error('Please check the fields!');
        };

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999") {
            throw new Error('Please enter a valid cpf!');
        };

        const generateBoletoNum = () => {
            let numeroBoleto = '';

            for (let index = 0; index < 48; index++) {
                const random = Math.floor(Math.random() * 10);
                numeroBoleto += random;
            };

            return numeroBoleto;
        };

        let boleto;

        if (type == "boleto") {
            boleto = generateBoletoNum();
            card_brand = undefined;
            card_name = undefined;
            card_number = undefined;
            card_expiration_date = undefined;
            card_cvv = undefined;
        } else {
            boleto = undefined
        };

        const id = this.idGenerator.generateId();

        const transaction = new Transaction(
            id,
            name,
            email,
            cpf,
            amount,
            type,
            boleto,
            card_brand,
            card_name,
            card_number,
            card_expiration_date,
            card_cvv
        );

        await this.transactionData.insert(transaction);

        return transaction;
    };

    getTransaction = async (cpf: string, amount: string) => {
        if (!cpf || !amount) {
            throw new Error('Plese check the fields!.');
        };

        const foundTransaction = await this.transactionData
            .getTransaction(cpf, amount);

        if (!foundTransaction) {
            throw new Error('Transaction not found.');
        };


        return foundTransaction;
    };
};