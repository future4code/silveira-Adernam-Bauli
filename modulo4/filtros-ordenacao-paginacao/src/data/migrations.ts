import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

   CREATE TABLE aula49_exercicio(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      type VARCHAR(255) NOT NULL
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .finally(closeConnection)