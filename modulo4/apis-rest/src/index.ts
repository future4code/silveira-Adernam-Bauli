//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum Type {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: Type,
  age: number
};


let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: Type.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: Type.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: Type.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: Type.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: Type.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: Type.ADMIN,
    age: 60,
  },
];

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    // Essa tipagem /error: any/ foi necessária devido a uma nova funcionalidade do TS 4.0, de tipar o erro capturado no catch como unknown, o que gera um erro ao tentar acessar a mensagem. Durante a aula o erro não apareceu, mas depois sim. Portanto, pode acontecer com algum de vocês o erro /object is of type 'unknown'/. A solução mais simples é tipar o error como any.
    // Documentação do TS explicando a nova feature: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings

    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      errorCode = 422; //unprocessable entity
      throw new Error("Invalid value for id. Please send a number.");
    }

    const user = users.find((user) => {
      return user.id === id;
    });

    if (!user) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.patch("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User updated successefully" });
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



// 1-

// a) Método GET.

// b) Usaria a palavara users.

// 2-

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const type: Type = req.query.type as Type;
    const user: User | undefined = users.find((user) => user.type === type);
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// a) Via query, por que nesse caso é melhor do que params, porém não há necessidade de um body.

// b) req.query.type as Type;

// 3-

app.get('/users', (request: Request, response: Response) => {
  let codeError: number = 400

  try {
    const name = request.query.name as string
    const searchUser: User | undefined = users.find(user => user.name === name)
    if (!searchUser) {
      codeError = 404
      throw new Error("Not found")
    }
    response.status(200).send(searchUser)
  } catch (error: any) {
    response.status(codeError).send({ message: error.message })
  }
})

// a) Query.

// 4-

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { id, name, email, type, age } = req.body;
    const newUser: User = {
      id: id as number,
      name: name as string,
      email: email as string,
      type: type as Type,
      age: age as number,
    };

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Check Fields");
    }

    users.push(newUser);
    res.status(201).send({ message: "User created" });

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
})

// a) O método PUT não afeta o funcionamento do endpoint, continua funcionando normalmente.

/// b) O método PUT é indicado nos endpoints de alteração, e não de criação.