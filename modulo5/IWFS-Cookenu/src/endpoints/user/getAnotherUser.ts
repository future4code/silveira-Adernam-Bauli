import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";


export async function getAnotherUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const targetId = req.params.id;

        if(!token) {
            res.status(422).send('Insira um token.');
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserById(targetId);

        const userToShow = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail()
        };

        res.status(200).send(userToShow)
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    };
};