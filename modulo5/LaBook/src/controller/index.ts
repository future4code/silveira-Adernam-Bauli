import UserBusiness from "../business/UserBusiness";
import { app } from "./app";
import UserController from "./UserController";
import UserData from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import express from 'express';
import PostController from "./PostController";
import PostBusiness from "../business/PostBusiness";
import PostData from "../data/PostData";



const userRoute = express.Router();

const postBusiness = new PostBusiness(
    new PostData(),
    new IdGenerator(),
    new Authenticator()
)

const postController = new PostController(
    postBusiness
);




app.post('/post/create', postController.createPost)
app.get('/post/get/:id', postController.getPostById)