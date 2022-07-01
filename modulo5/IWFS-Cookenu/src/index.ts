import { app } from './app';
import { getAllCharacters } from './endpoints/getAllCharacters';
import { getAnotherUser } from './endpoints/getAnotherUser';
import { getUser } from './endpoints/getUser';
import { login } from './endpoints/login';
import { signup } from './endpoints/signup';

app.get('/get/all', getAllCharacters);
app.get('/get/user', getUser);
app.get('/get/id/:id', getAnotherUser);
app.post('/user/signup', signup);
app.post('/user/login', login);