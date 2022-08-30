export default class Transaction {
    constructor(
        private customer_id: string,
        private customer_name: string,
        private customer_email: string,
        private customer_cpf: string,
        private amount: string,
        private transaction_type: string,
        private boleto: string | undefined,
        private card_brand: string | undefined,
        private card_name: string | undefined,
        private card_number: string | undefined,
        private card_expiration_date: string | undefined,
        private card_cvv: string | undefined,
    ) { }
};