import app from "./app";
import editUser from './endpoints/editUser';
import createUser from './endpoints/createUser';
import login from './endpoints/login';

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

app.post('/user/login', login)



// 1)
// a) Sim, pois em uma strings pemos então usar letras, juntamente com números e até símbolos, em vez de usar somente números.

// 2)
// a) Primeira criou uma variável para armazenar o nome da tabela que vai ser usada.
//    Depois criou a conexão com o banco de dados.
//    E por fim criou a função que vai fazer o insert na tabela com os dados do usuário.

// b) CREATE TABLE Users (
//	     id VARCHAR(255) PRIMARY KEY UNIQUE,
//       email VARCHAR(255) UNIQUE,
//       password VARCHAR(255)
//    );

// 3)
// a) Recebe a informação e considera ela como string.

// Não consegui entender a aula, nem vendo vídeo depois, infelizmente hoje foi um dia difícil e não pude solucionar as atividades.