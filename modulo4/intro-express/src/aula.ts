import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
// <---- CONFIGURACAO DA API --->

// Essa api nao vai ter o erro de cors
app.use(cors())
// Nesse backEnd , os dados serão mandados para o frontEnd , no formato de Json.
app.use(express.json())

// <---- CONFIGURACAO DA API --->



app.get('/nome',(request:Request,response:Response)=>{
    const variavel = 'isso é uma string de variavel'
    response.status(201).send({message:variavel})
})

app.post('/enviar-nome',(request:Request,response:Response)=>{
    // const token = request.headers.authorization
    // const pessoa = request.body
    const array = ['teclado','mouse','monitor']

    // recebi o valor do usuario pelo query
    const {nomeProduto} = request.query

    const [acheiOProduto] = array.filter((prod)=>{
        return prod === nomeProduto
    })

    if(!acheiOProduto){
        response.status(404).send({message:"nao achei o produto"})
    }

    response.status(201).send(
        {message:`o produto ${acheiOProduto} existe`
    })

})

app.post('/nome/:id',(request:Request,response:Response)=>{

    const idDaPessoa = Number(request.params.id)

    const arrayId = [{id:1,nome:'Gabriel'},{id:2,nome:'Murilo'}]


    const acheiId = arrayId.find((person)=>{
        return person.id === idDaPessoa
    })

    // response.status(200).send({message:`achei o ${acheiId?.nome}`})
    response.status(201).end()
    
})





// estou escutando uma porta com numero 3003
app.listen(3003,()=>{
    console.log(`servidor esta rodando na porta localhost:3003`)
})




