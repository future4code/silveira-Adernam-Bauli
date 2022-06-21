// a) Ele cria e realiza ações em uma classe. Para chamá-lo usamos os argumentos quando criamos um instância baseada na classe.

// b) Uma vez.

type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getDescription(): Transaction[] {
        return this.transactions;
    }

}

const bauli = new UserAccount("999.999.999-99", "Adernam", 24)

// c) Criando um método get publico que retorna o valor do campo desejado.

// 2)

class NewTransaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(newDescription: string, newValue: number, newDate: string) {
        this.description = newDescription,
            this.value = newValue,
            this.date = newDate
    }

    public getDescription(): string {
        return this.description;
    }

    public getValue(): number {
        return this.value;
    }

    public getDate(): string {
        return this.date;
    }

}

class Bank {
    private accounts: UserAccount[];

    constructor(accounts:UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }
    
    public setaccounts(value: UserAccount[]) {
        this.accounts = value;
    }
}