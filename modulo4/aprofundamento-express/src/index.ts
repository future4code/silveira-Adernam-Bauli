import express from "express";
import cors from "cors";
import { users } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => console.log("Servidor disponível em 3003"));

app.get("/playlists", (req, res) => {
  // tenho todos os usuários
  const currentUsers = users // array de objetos
  console.log(1, currentUsers);

  // Vou pegar as playlists de cada usuário
  const userPlaylists = currentUsers.map((user: any) => {
    return user.playlists
  }) // array de arrays
  console.log(2, userPlaylists)

  const result = userPlaylists.flat(1)

  res.status(200).send(result);
})


app.get("/tracks", (req, res) => {
  const playlistId = req.query.id

  if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

  const allPlaylists = users.map((user: any) => {
    return user.playlists
  }).flat(1)

  let tracks;

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      tracks = playlist.tracks
    }
  })

  res.status(200).send(tracks)
})


app.delete("/playlist", (req, res) => {
  const id = req.query.id

  users.forEach((user: any) => {
    user.playlists = user.playlists.map((playlist: any) => {
      if (playlist.id === id) {
        return {}
      }
      return playlist
    });
  })

  res.status(200).send(users)
})


app.delete("/track", (req, res) => {
  const trackId = req.query.trackId
  const playlistId = req.query.playlistId

  const allPlaylists = users
    .map((user: any) => {
      return user.playlists;
    })
    .flat(1);
  for (let i = 0; i <= allPlaylists.lenght; i++) {
    allPlaylists[i]
  }

  for (let playlist of allPlaylists) {
    playlist
  }

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      playlist.tracks = playlist.tracks.map((track: any) => {
        if (track.id === trackId) {
          return {};
        }
        return track;
      });
    }
  })

  res.status(200).send(allPlaylists)
})


app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})


type toDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}


const arrayToDo: toDo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "Acordar",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Ligar o pc",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Fazer o warmup",
    "completed": true
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Assistir a aula",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Terminar os exercícios",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Fazer a entrega dos exercícios",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "Fazer a entrega do Feedback",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "Desligar o pc",
    "completed": false
  },
]

app.get("/todos", (req, res) => {
  res.send(arrayToDo)
})


app.post("/todos", (req, res) => {
  const userId = Number(req.body.useId);
  const id = Number(req.body.id);
  const title = String(req.body.title);
  const completed = Boolean(req.body.completed);


  const newToDo: toDo = {
    userId: userId,
    id: id,
    title: title,
    completed: completed
  }

  arrayToDo.push(newToDo)

  res.status(201).send("Deu certo")
})


app.put("todos/:id", (req, res) => {
  const id = Number(req.params.id);

  // const applyChange = arrayToDo.filter((filter) => {
  //   if (filter.id === id) {
  //     filter.completed !== filter.completed
  //   }
  // })

  for (let todo of arrayToDo) {
    if (id === todo.id) {
      todo.completed !== todo.completed
    }
  }
  res.status(200).send("Deu certo")
})