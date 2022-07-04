import { app } from './app';
import createRecipe from './endpoints/recipe/createRecipe';
import {getAllRecipes} from './endpoints/recipe/getAllRecipes';
import getRecipeById from './endpoints/recipe/getRecipeById';
import { getAllCharacters } from './endpoints/user/getAllCharacters';
import { getAnotherUser } from './endpoints/user/getAnotherUser';
import { getUser } from './endpoints/user/getUser';
import { login } from './endpoints/user/login';
import { signup } from './endpoints/user/signup';

app.get('/get/all', getAllCharacters);
app.get('/get/user', getUser);
app.get('/get/id/:id', getAnotherUser);
app.get('/recipe/get/all', getAllRecipes);
app.get('/recipe/get/id/:id', getRecipeById);
app.post('/user/signup', signup);
app.post('/user/login', login);
app.post('/recipe/create', createRecipe);