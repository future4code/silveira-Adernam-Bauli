// let users: User[] = [
//   {
//     name: "Adernam",
//     cpf: "111.111.111-11",
//     birthDate: 01/24/1998,
//     balance: 10000,
//   },
//   {
//     name: "Maria Eduarda",
//     cpf: "222.222.222-22",
//     birthDate: "10/06/2000",
//     balance: 5000,
//   },
//   {
//     name: "Murilo",
//     cpf: "333.333.333-33",
//     birthDate: "01/01/1994",
//     balance: 30000,
//   },
//   {
//     name: "Jana",
//     cpf: "444.444.444-44",
//     birthDate: "01/01/1990",
//     balance: 18000,
//   }

// ];

export type Transaction = {
    value: number,
    description: string,
    date: Date
}


export type Account = {
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number,
    statements: Array<Transaction>
};

export const accounts: Account[] = []