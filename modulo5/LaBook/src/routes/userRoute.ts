import express from "express";
import UserBusiness from "../business/UserBusiness";
import UserController from "../controller/UserController";

const userRoute = express.Router();

// const userController = new UserController();

// userRoute.post("/signup", userController.signup);