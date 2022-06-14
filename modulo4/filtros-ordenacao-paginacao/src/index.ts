import { app } from "./app";
import { getAllUsers } from "./endpoints/getUsers";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersByOrder } from "./endpoints/getUsersByOrder";

app.get("/users", getAllUsers);

app.get("/users/:type", getUsersByType);

app.get("/users/order", getUsersByOrder);