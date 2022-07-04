import { Request, Response } from "express";
import { Authenticator } from '../../services/Authenticator';
import { IdGenerator } from "../../services/idgenerator";
import { Recipe } from "../../entities/Recipe";
import { UserDatabase } from "../../data/UserDatabase";
import { User } from "../../entities/User";
import { RecipeDatabase } from "../../data/RecipeDatabase";

export default async function createRecipe(req: Request, res: Response): Promise<void> {

    try {
        const token = req.headers.authorization;
        const { title, description } = req.body;

        const authenticator = new Authenticator;
        const tokenData = authenticator.getTokenData(token);

        const recipeDatabase = new RecipeDatabase();
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const createdAt = new Date();

        const userDatabase = new UserDatabase();
        const user: User = await userDatabase.findUserById(tokenData.id);

        const newRecipe = new Recipe(
            id,
            title,
            description,
            createdAt,
            tokenData.id,
            user.getName()
        )

        await recipeDatabase.createRecipe(newRecipe)

        res.status(201).send({message: 'Receita criada com sucesso!', newRecipe})

    } catch (error) {
        console.log(error.message)
        throw new Error(error.sqlMessage || error.message)
    }
}