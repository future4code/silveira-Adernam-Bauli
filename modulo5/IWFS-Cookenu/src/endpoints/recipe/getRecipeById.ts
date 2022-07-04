import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { Authenticator } from "../../services/Authenticator";

export default async function getRecipeById(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization;
        const id = req.params.id;

        if(!token) {
            res.status(422).send('Insira um token.');
        };

        // const authenticator = new Authenticator();
        // const tokenData = authenticator.getTokenData(token);

        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.findRecipeById(id);

        // const recipeToShow = {
        //     id: recipe.getId(),
        //     title: recipe.getTitle(),
        //     description: recipe.getDescription()
        // }

        // res.status(200).send(recipeToShow)

        res.status(200).send(recipe)
    } catch (error) {
        console.log(error.message)
        throw new Error(error.sqlMessage || error.message)
    }
}