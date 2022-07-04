import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";


export async function getUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;

        if (!token) {
            res.status(422).send('É necessário informar um token.');
        };

        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokenData(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserById(tokenData.id);

        const userToShow = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail()
        };

        res.status(200).send(userToShow);

    } catch (error) {
        console.log(error.message)
        throw new Error(error.sqlMessage || error.message);
    };
};