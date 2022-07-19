import UserBusiness from "../business/AthleteBusiness";
import { app } from "./app";
import UserController from "./AthleteController";
import UserData from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import express from 'express';
import PostController from "./CompetitionController";
import PostBusiness from "../business/CompetitionBusiness";
import PostData from "../data/CompetitionData";



const userRoute = express.Router();

const postBusiness = new PostBusiness(
    new PostData(),
    new IdGenerator(),
    new Authenticator()
)

const postController = new PostController(
    postBusiness
);

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(
    userBusiness
);


app.post('/post/create', postController.createPost)
app.post('/user/login', userController.login)
app.get('/post/get/:id', postController.getPostById)