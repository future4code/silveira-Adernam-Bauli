import express, { Request, Response } from 'express';
import cors from 'cors';
import { ADDRGETNETWORKPARAMS } from 'dns';


const app = express()

app.use(cors())

app.use(express.json())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (request: Request, response: Response) => {
    response.status(200).send("Hello from Express")
})


type User = {
    id: string | number
    name: string
    phone: number
    email: string
    website: string
}

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}


const users: User[] = [
    {
        id: 1,
        name: "Adernam",
        phone: 988888888,
        email: "adernam@hotmail.com",
        website: "adernam.com.br"
    },

    {
        id: 2,
        name: "Maria Eduarda",
        phone: 999999999,
        email: "duda.gatinha@hotmail.com",
        website: "dudinha.com.br"
    },

    {
        id: 3,
        name: "Lucas",
        phone: 977777777,
        email: "lukinha123@hotmail.com",
        website: "lucas.com.br"
    }
]

app.get("/users", (request: Request, response: Response) => {
    response.status(201).send({ message: users });
})

// 6- Deve ser fora, pois o post terá uma tipagem diferente do array de usuários.

const posts: Post[] = [
    {
        id: 1,
        title: "Amor",
        body: "O amor é lindo. (Quando recíproco hehehe)",
        userId: 1
    },

    {
        id: 2,
        title: "Bananinha",
        body: "Banana, bananinha, essa banana é uma bananinha",
        userId: 2
    },
]

app.get("/posts", (request: Request, response: Response) => {
    response.status(201).send({ message: posts });
})

app.get("/posts/:id", (request: Request, response: Response) => {
    let idUser = Number(request.params.id);

    const findPost = posts.find((post) => {
        if(post.userId === idUser) {
            return post;
        }
    })

    response.status(201).send(findPost);
})

// app.delete("/posts:id", (request: Request, response: Response) => {
//     let id = Number(request.params.id);


// })







// {
//     id: 2,
//     title: "Bananinha",
//     body: "Banana, bananinha, essa banana é uma bananinha",
//     userId: 2
// },