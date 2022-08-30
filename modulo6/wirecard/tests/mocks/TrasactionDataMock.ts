import TransactionData from '../../src/data/TransactionData';
import Transaction from '../../src/model/Transaction'
import { transactionMock } from './TransactionMock'

export class TransactionDataMock extends TransactionData {

    public insert = async (transaction: Transaction): Promise<void> => {
    };

    public getTransaction = async (cpf: string, amount: string): Promise<any> => {

        switch (cpf) {
            case 'ustomer_cpf1':
                return transactionMock
            default:
                return undefined;
        };
    };
};