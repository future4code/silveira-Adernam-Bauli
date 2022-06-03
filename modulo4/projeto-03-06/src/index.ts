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


type User = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number
};


let users: User[] = [
  {
    name: "Adernam",
    cpf: "111.111.111-11",
    birthDate: "01/24/1998",
    balance: 10000,
  },
  {
    name: "Maria Eduarda",
    cpf: "222.222.222-22",
    birthDate: "10/06/2000",
    balance: 5000,
  },
  {
    name: "Murilo",
    cpf: "333.333.333-33",
    birthDate: "01/01/1994",
    balance: 30000,
  },
  {
    name: "Jana",
    cpf: "444.444.444-44",
    birthDate: "01/01/1990",
    balance: 18000,
  }

];

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.body.name as string;
    const cpf: string = req.body.cpf as string;

    const user = users.find((user) => {
      return user.name === name && user.cpf === cpf
    });

    let balance

    if (user) {
      balance = `Your balance: ${user.balance}`
    }

    if (!name || !cpf) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    console.log(balance)
    res.status(200).send(balance);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, birthDate } = req.body;

    const alreadyCpf = users.find((user) => {
      return user.cpf === cpf;
    });

    if (alreadyCpf) {
      throw new Error("Cpf already registered!");
    }

    if (!name || !cpf || !birthDate) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      name: name as string,
      cpf: cpf as string,
      birthDate: birthDate as string,
      balance: 0,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.post("/users/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.body.name as string;
    const cpf: string = req.body.cpf as string;

    const user = users.find((user) => {
      return user.name === name && user.cpf === cpf
    });

    if (!name || !cpf) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }


    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});



// app.put("/products/:id", (req: Request, res: Response) => {
//   const id = req.params.id
//   const price = req.body.price;
//   const findProduct:Product | undefined = arrayProducts.find((product) => {
//     return product.id === id
//   })
//   const prod = findProduct
//   const index = arrayProducts.findIndex((product) => {
//     return product.id === id
//   })

//   if (!prod) {
//     throw new Error("Produto não encontrado.")
//   }
  
//   const editedProduct: Product = {
//     id: id,
//     name: prod.name,
//     price: price
//   }

//   if (id  && price) {
//     arrayProducts.splice(index, 1, editedProduct);
//     res.status(201).send({ arrayProducts })
//   } else if (!id || typeof id !=="number" || !price || price <= 0 || !prod) {
//     res.status(400).send("Algo deu errado.")
//   }

// })


// app.delete("/products/:id", (req: Request, res: Response) => {
//   const id = req.params.id
//   const index = arrayProducts.findIndex((product) => {
//     return product.id === id
//   })

//   if (id) {
//     arrayProducts.splice(index, 1);
//     res.status(201).send({ arrayProducts })
//   } else if (!id || !index ) {
//     res.status(400).send("Algo deu errado.")
//   }

// })











const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});