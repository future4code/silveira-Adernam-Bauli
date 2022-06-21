// Exercícios de Herança.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    };

    public getId(): string {
        return this.id;
    };

    public getEmail(): string {
        return this.email;
    };

    public getName(): string {
        return this.name;
    };

    public introduceYourself(): string {
        return (`Olá, sou ` + this.getName() + `. Bom dia!`)
    }
};

// a) Não, a menos que fosse criado um método que retornasse ela.

// b) Nenhuma.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    };

    public getCreditCard(): string {
        return this.creditCard;
    };
};

const bauli = new Customer("001", "bauli@hotmail.com", "Bauli", "123456", "9999 9999 9999 9999");

// 2)

// a) Uma vez apenas.

// b) Também uma única vez. Por que só passa uma vez pelo constructor pai.

// 3)

console.log("Id: " + bauli.getId());
console.log("Name: " + bauli.getName());
console.log("Email: " + bauli.getEmail());
console.log("Purchase total: " + bauli.purchaseTotal);
console.log("Credit Card: " + bauli.getCreditCard());

// a) Não pois a senha está como private no pai.

// 4)

// 5)

console.log(bauli.introduceYourself());

// Exercícios de Polmorfismo.

// 1)

interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Adernam",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculateBill());

// a) Todas. Não tive problema com nenhuma. Por que nenhuma propriedade era privada.

// 2)

export abstract class Place {
    constructor(protected cep: string) { };

    public getCep(): string {
        return this.cep;
    };
};

// const cidade = new Place();

// a) Cannot create an instance of an abstract class.

// b) Criar uma herança const (...) extends Place.

// 3)

export class Residence extends Place {
    constructor(
        private residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    };

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    };
};

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    };

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    };
};

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    };

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    };
};

const residenceInstance = new Residence(2, "10100101");
const commerceInstance = new Commerce(5, "20200202");
const industryInstance = new Industry(3, "30300303");

console.log("CEP Residence: " + residenceInstance.getCep());
console.log("CEP Commerce: " + commerceInstance.getCep());
console.log("CEP Industry: " + industryInstance.getCep());

// 4)

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// a) Possui um método que retorna o cpf, e um método que calcula o valor da conta de energia (baseado no custo * energia consumida).
// E possui as propriedades da classe Residence (já que é filha dela), e da interface Client (já que implementa ela).

// 5)

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

// a) As semelhanças são as propriedades do cliente, o método de calcular o valor da energia, e um método de get.

// b) As diferenças são que no lugar de cpf tem cnpj, e o método get que retornava o cpf, consequentemente retorna o cnpj agora.

// 6)

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

// a) Da classe Industry, pois representa indústrias.

// b) Implementa a interface Client, pois necessita dos dados pessoais do cliente.

// c) Por que nenhuma dessas informações vai precisar ser editada.