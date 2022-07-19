import express from "express";
import UserBusiness from "../business/AthleteBusiness";
import UserController from "../controller/AthleteController";
import UserData from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const userRoute = express.Router();

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(
    userBusiness
);


app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)


userRoute.post("/signup", userController.signup);