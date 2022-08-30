import Transaction from '../model/Transaction';
import { BaseDatabase } from './BaseDatabase';

export default class TransactionData extends BaseDatabase {
    protected TABLE_NAME = 'wirecard';

    public insert = async (transaction: Transaction): Promise<void> => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(transaction)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Database error!');
            };
        };
    };

    public getTransaction = async (cpf: string, amount: string): Promise<any> => {
        try {
            const result = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({
                    customer_cpf: cpf,
                    amount
                })

            return result;
        } catch (error) {
            throw new Error('Database error!');
        };
    };
};