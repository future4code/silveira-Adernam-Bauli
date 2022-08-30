export type TransactionDTO = {
    name: string,
    email: string,
    cpf: string,
    amount: string,
    type: string,
    card_brand?: string,
    card_name?: string,
    card_number?: string,
    card_expiration_date?: string,
    card_cvv?: string,
};