import TransactionBusiness from '../src/business/TransactionBusiness';
import { IdGeneratorMock } from './mocks/idGeneratorMock';
import { TransactionDataMock } from './mocks/TrasactionDataMock';

const transactionBusinessMock = new TransactionBusiness(
    new TransactionDataMock(),
    new IdGeneratorMock()
);

describe('Testing sign up', () => {
    test('Should return an error if name is empty', async () => {

        const input = {
            name: '',
            email: 'customer@gmail.com',
            cpf: 'customer_cpf1',
            amount: 'amount1',
            type: 'card',
            card_brand: 'visa1',
            card_name: 'card_name1',
            card_number: 'card_numer1',
            card_expiration_date: 'card_expiration_date1',
            card_cvv: 'card_cvv1'
        };

        try {
            await transactionBusinessMock.create(input);
        } catch (error: any) {
            expect(error.message).toEqual('Please check the fields!');
        } finally {
            expect.assertions(1);
        };
    });
});