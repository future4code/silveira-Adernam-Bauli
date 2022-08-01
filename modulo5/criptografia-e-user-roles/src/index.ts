import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import userProfile from "./endpoints/userProfile";

dotenv.config();

const app = express();

app.use(express.json());

// const senhaCriptografada = new HashManager().createHash("batata")

// const compare = new HashManager().compareHash("batata", senhaCriptografada)

app.post('/user/signup', createUser);

app.post('/user/login', login);

app.post('/user/profile', userProfile);














const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


// a) Round é o chamado "cost", que se refere a o tempo de execução do algoritmo para usar uma senha mais complexa.
//    Ja o salt é uma string aleatória gerada e inserida na senha para que dificulte a dificuldade de descoberta da senha.
//    O ideal para o cost é o numero 12, que é um valor equilibrado para a senha fica quase impossível de ser descoberta,
//    mas que também não demore muito para processar.

// 2)

// a) Primeiro deve ser modificado o endpoint de cadastro, para que a senha seja guardada no banco de dados já criptografada.
