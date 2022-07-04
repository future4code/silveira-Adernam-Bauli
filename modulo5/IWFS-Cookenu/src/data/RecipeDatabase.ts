import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase"

const recipeTableName = 'Recipes'

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection(recipeTableName)
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    createdAt: recipe.getCreatedAt(),
                    userId: recipe.getUserId(),
                    userName: recipe.getUserName()
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findRecipeById(id: string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection(recipeTableName)
                .select('*')
                .where({ id });
            return recipe[0] && Recipe.toRecipeModel(recipe[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findRecipeByTitle(title: string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection(recipeTableName)
                .select('*')
                .where({ title });
            return recipe[0] && Recipe.toRecipeModel(recipe[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllRecipes(): Promise<Recipe[]> {
        try {
            const recipes = await BaseDatabase.connection(recipeTableName)
                .select(
                    '*'
                );

            return recipes.map((recipe => Recipe.toRecipeModel(recipe)))
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}