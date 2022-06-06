//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

import { accounts, Account, Transaction } from "./accounts";

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


app.get("/users/all", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    if (!accounts.length) {
      throw new Error("No accounts found");
    }
    res.status(200).send(accounts);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.body.name as string;
    const cpf: string = req.body.cpf as string;

    const user = accounts.find((user) => {
      return user.name === name && user.cpf === cpf
    });

    let balance;

    if (user) {
      balance = `Your balance: ${user.balance}`;
    }

    if (!name || !cpf) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(balance);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, birthDateString } = req.body;
    const [day, month, year] = birthDateString.split("/");
    const birthDate: Date = new Date(`${year}-${month}-${day}`);
    const ageMilisseconds: number = Date.now() - birthDate.getTime();
    const age: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365;

    const alreadyCpf = accounts.find((user) => {
      return user.cpf === cpf;
    });

    if (alreadyCpf) {
      throw new Error("Cpf already registered.");
    }

    if (!name || !cpf || !birthDateString) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    if (age < 18) {
      errorCode = 406;
      throw new Error("Age must be higher than 18.");
    }

    const newUser: Account = {
      name,
      cpf,
      birthDate,
      balance: 0,
      statements: []
    };

    accounts.push(newUser);

    res.status(201).send({ message: "Account created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.put("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.body.name as string;
    const cpf: string = req.body.cpf as string;

    const findUser = accounts.find((user) => {
      return user.name === name && user.cpf === cpf
    });

    const account = findUser;

    const index = accounts.findIndex((user) => user.cpf === cpf);

    if (!account) {
      throw new Error("Account not found");
    }

    if (!name || !cpf) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newBalance: Account = {
      name,
      cpf,
      birthDate: account.birthDate,
      balance: req.body.balance,
      statements: account.statements
    };

    if (account) {
      accounts.splice(index, 1, newBalance);
    }

    res.status(201).send({ message: "Balance changed successefully!" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.post("/users/transfer", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const nameSender: string = req.body.sender as string;
    const cpfSender: string = req.body.cpfSender as string;
    const nameReceiver: string = req.body.receiver as string;
    const cpfReceiver: string = req.body.cpfReceiver as string;
    const transaction: number = req.body.value as number;

    const indexSender = accounts.findIndex((user) => user.cpf === cpfSender);
    const indexReceiver = accounts.findIndex((user) => user.cpf === cpfReceiver);

    const findSender = accounts.find((user) => {
      return user.name === nameSender && user.cpf === cpfSender
    });

    const findReceiver = accounts.find((user) => {
      return user.name === nameReceiver && user.cpf === cpfReceiver
    });

    const sender = findSender;
    const receiver = findReceiver;

    if (!nameSender || !cpfSender || !nameReceiver || !cpfReceiver) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    if (sender && receiver) {

      if (sender.name === receiver.name && sender.cpf === receiver.cpf) {
        throw new Error("The sender cannot be the same as the receiver.");
      }

      const newSenderBalance: number = sender.balance - transaction;
      const newReceiverBalance: number = receiver.balance + transaction;

      const senderTransaction: Transaction = {
        value: transaction,
        description: `Transaction to ${receiver.name}`,
        date: new Date()
      };

      const newSender: Account = {
        name: sender.name,
        cpf: sender.cpf,
        birthDate: sender.birthDate,
        balance: newSenderBalance,
        statements: sender.statements
      };

      newSender.statements.push(senderTransaction);

      accounts.splice(indexSender, 1, newSender);

      const receiverTransaction: Transaction = {
        value: transaction,
        description: `Transaction by ${sender.name}`,
        date: new Date()
      };

      const newReceiver: Account = {
        name: receiver.name,
        cpf: receiver.cpf,
        birthDate: receiver.birthDate,
        balance: newReceiverBalance,
        statements: receiver.statements
      };

      newReceiver.statements.push(receiverTransaction);

      accounts.splice(indexReceiver, 1, newReceiver);
    }

    res.status(201).send({ message: "Transaction performed successfully!" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.post("/users/payment", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const cpf: string = req.body.cpf
    const value: number = req.body.value as number;
    const description: string = req.body.description as string;

    const indexAccount = accounts.findIndex((user) => user.cpf === cpf);

    const findSender = accounts.find((user) => {
      return user.cpf === cpf
    });

    const account = findSender;

    if (!cpf || !value || !description) {
      errorCode = 422;
      throw new Error("Please check the fields! Only Date filme can be empty.");
    }

    let paymentDate;

    if (req.body.date) {
      const [day, month, year] = req.body.date.split("/");
      const date: Date = new Date(`${year}-${month}-${day}`);
      paymentDate = req.body.date;
    } else {
      paymentDate = new Date();
    }

    if (account) {
      const accountBalance: number = account.balance - value;

      const accountTransaction: Transaction = {
        value,
        description,
        date: paymentDate
      };

      const newAccount: Account = {
        name: account.name,
        cpf: account.cpf,
        birthDate: account.birthDate,
        balance: accountBalance,
        statements: account.statements
      };

      account.statements.push(accountTransaction);

      accounts.splice(indexAccount, 1, newAccount);
    }

    res.status(201).send({ message: "Payment performed successfully!" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});