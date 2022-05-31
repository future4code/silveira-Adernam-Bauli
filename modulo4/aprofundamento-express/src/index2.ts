// //import express from "express" // 
// import express,{ Request, Response} from 'express'
// import cors from "cors"
// import { users } from "./data" 

// // LINK DA DOCUMENTAÇÃO <------------------ feito no postman ;) 
// // https://documenter.getpostman.com/view/20614766/Uz5DowQz 
// const app = express()

// app.use(cors())
// app.use(express.json())

// app.listen(3003, () => console.log("Servidor disponível em 3003"))

// // Parte 01 
// // o que acontece se eu chamar: 

// //1 -  http://localhost:3003/test/hello
// //2 -  http://localhost:3003/test/10

// app.get('/test/:number', (req: Request, res:Response) => {
//   res.send(
//   `Seu número da sorte é ${Number(req.params.number) + 3}!
//   `)
//   })

//   app.get('/test/hello', (req: Request, res:Response) => {
//   res.send(`Olá, mundo!`)
//   })

// //  http://localhost:3003/test/:number/:other (dois parâmetros)

// // caso você queria chamar: 
// //  http://localhost:3003/test/:number e 
// //  http://localhost:3003/test/:other 

// // como fazer? 

// //  http://localhost:3003/test-number/:number
// //  http://localhost:3003/test-string/:string

// // POSSO TRATAR:


// // app.get('/test/:number', (req: Request, res:Response) => {
// //   if(req.params.number === "5"){
// //   res.send(
// //   `Seu número da sorte é ${Number(req.params.number) + 3}!
// //   `)
// //   }})

// //   app.get('/test/hello', (req: Request, res:Response) => {
// //   res.send(`Olá, mundo!`)
// //   })



// // Ex: Encontrando TODAS as playlists: 

// app.get("/playlists/search", (req:Request, res:Response) => {
//   //Reeecebaaaaa, siiii, os parâmentros
//   const userAuthorization = req.headers.authorization
//   const query = req.query.name 

//   //verifique se tá vazio
//   if(!query){
//        return res.status(400).send("Error - verificar nome da playlist");
//   }
  
// //####### Encontre o user: 
  
//     console.log("Econtrando user: ")


// //como encontramos um user?  (pode ser find)
//   const searchUser = users.filter(usuario =>{
//     return usuario.id === userAuthorization
//     })
//   console.table(searchUser);


// //####### Encontre o a playlist pelo nome :

//   // Procurando playlist pelo nome : 
//     const playlistUser = searchUser[0].playlists.filter(playlists => {
//     return playlists.name.toLowerCase() === String(query).toLocaleLowerCase()});
//     console.table(playlistUser)


// //####### Trate a saída segundo o Labefy 
//       const playlistMapeada = playlistUser.map(playlist =>{
//         return {
//           id:playlist.id, 
//           name: playlist.name}

//       })
//     console.table(playlistMapeada)

// //Porem a documentação pede a quantidade também: 
// // para isso, crio o type para deixar tudo typado(lindo)
//     type resposta ={
//       quantity: Number,
//       list:any[]
//         }

// //result = a quantidade de itens no vetor do user e o vetor já mapeado
//     const result :resposta = {
//       quantity: playlistUser.length,
//       list:playlistMapeada
//     }
//     console.table(result)

//     res.send({result});

//   // const playlistUserFilter = users.filter(usuario =>{
//   //     return usuario.id === userAuthorization
//   //   })

//   });


//   //######### CREATE PLAYLIST - POST

//   app.post("/playlists", (req:Request, res:Response) =>{


//     const userAuthorization = req.headers.authorization
//     const nomeDaPlaylist = req.body.name 
//     //recebemos do body a var name
//       console.log("Create playlist, dados req:")
    
//     const query = req.body.name;
//       console.table({userAuthorization,nomeDaPlaylist})
    
//     //existem varias formas, vamos usar um for para percorrer o array
//     // vamos criar uma variavel para receber a nova playlist
//       const novaPlaylist = {
//         id: Date.now().toString(),
//         name:query,
//         tracks: []
//       }

//       for(const user of users){
//         if( user.id === userAuthorization){
//           user.playlists.push(novaPlaylist)
//         }
//       }
//       res.send({userAuthorization,nomeDaPlaylist})
//   })

//   // ######## ADD TRACK TO PLAYLIST

//   app.post("/playlists/:playlistId/tracks", (req:Request, res:Response) =>{
     
//     // pegamos o user, a playList e a nova música 
//     const userAuthorization = req.headers.authorization
//     const playlistId = req.params.playlistId
//     console.log("Playlist ID")
//     console.table(playlistId)
    
//     type music ={
//       id: string,
//       name:string,
//       artist:string,
//       url: string
//     }
    
//     // nova música: 
//     const newMusic: music = {
//         id: Date.now().toString(),
//         name: req.body.name,
//         artist: req.body.artist,
//         url: req.body.url
//     }
// // percorro o array  de usuarios 
//     for(const user of users){
//       // se a autorização for igual a o id 
//         if(userAuthorization === user.id){
//           // percorremos o array do user (playlists)
//         for(const playlistsOfuser of user.playlists){
//           // se encontrarmos a playslist via id: 
//           if (playlistsOfuser.id === playlistId){
//              console.log("Achamos: ")
//           //damos um push no objeto newMusic
//             playlistsOfuser.tracks.push(newMusic);
//               }
//         }
//       }
//     }      
//       res.send({userAuthorization,playlistId,newMusic})
//   })

//   app.get("/playlists/list/", (req:Request, res:Response) =>{
       
//       for (const user of users){
//           console.log(user)
//       }
      
//       res.send({users})
//   })


//   // Ex:1.3 Encontrando TODAS as playlists: 

// // app.get("/playlists/search", (req:Request, res:Response) => {
// //   const userAuthorization = req.headers.authorization
// //   const query = req.query.name 
  
// //   //Encontrar o user: 
// //   const dadosUser = users.find(usuario => usuario.id === userAuthorization);
// //   //caso nosso usuario não exista, precisamos responder:
// //   if(!dadosUser) {
// //     res.status(404).send("Usuário não encontrado");
// //     return//finalizar a função
// //     }
// //   // Procurando playlist: 
// //     const playlistUser = dadosUser.playlists.find(playlists => 
// //       playlists.name.toLowerCase() === String(query).toLocaleLowerCase());

// //   if(!playlistUser) {
// //     res.status(404).send("Usuário não encontrado");
// //     return
// //     } 
// // //
// //     res.send({userAuthorization,playlistUser});

// //   });

