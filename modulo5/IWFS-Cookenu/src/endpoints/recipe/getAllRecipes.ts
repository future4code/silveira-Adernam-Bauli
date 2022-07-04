import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getAllRecipes(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization;

        if(!token) {
            res.status(422).send('Insira um token.');
        };

        // const authenticator = new Authenticator();
        // const tokenData = authenticator.getTokenData(token);

        const recipeDatabase = new RecipeDatabase();
        const recipes = await recipeDatabase.getAllRecipes();

        res.status(200).send(recipes)        
    } catch (error) {
        console.log(error.message)
        throw new Error(error.sqlMessage || error.message)
    }
}