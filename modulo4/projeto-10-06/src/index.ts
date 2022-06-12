import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


app.get('/todousers/all', async (req: Request, res: Response) => {
    try {
        const result = await connection(`to_do_list_users`)
            .select("id", "nick")
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("An error has occurred.")
    }
})

app.get('/todousers/:id', async (req: Request, res: Response) => {
    try {
        const result = await connection(`to_do_list_users`)
            .select("id", "nick")
            .where({
                id: req.params.id
            })
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("User not found.")
    }
})

app.post("/todousers", async (req, res) => {
    try {
        const { name, nick, email } = req.body

        type User = {
            name: string,
            nick: string,
            email: string
        }

        if (typeof name !== "string" || typeof nick !== "string" || typeof email !== "string") {
            throw new Error();
        }

        const user: User = {
            name,
            nick,
            email
        }

        await connection(`to_do_list_users`).insert(user)

        res.status(201).send("User created successfully.")
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        res.status(400).send("An error has occurred.")
    }
})

app.put("/todousers/edit/:id", async (req: Request, res: Response) => {
    try {
        const { name, nick } = req.body;

        if (!name || !nick) {
            throw new Error();
        }

        await connection(`to_do_list_users`)
            .update({
                name,
                nick
            })
            .where({ id: req.params.id })

        res.send(`${nick} updated successfully!`)
    } catch (error) {
        console.log(error)
        res.status(400).send("An error has occurred.")
    }
})

app.post("/todolist", async (req, res) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;
        const requiredFields = ["title", "description", "limitDate", "creatorUserId"];
        const [day, month, year] = limitDate.split("/");
        const splitedLimitDate: Date = new Date(`${year}-${month}-${day}`);

        for (const field of requiredFields) {
            if (!req.body[field]) {
                throw new Error(`Field ${field} is required.`);
            }
            if (typeof req.body[field] !== "string") {
                throw new Error(`Field ${field} must be string.`);
            }
        }

        type Task = {
            title: string,
            description: string,
            limitDate: Date,
            creatorUserId: string
        }

        const task: Task = {
            title,
            description,
            limitDate: splitedLimitDate,
            creatorUserId
        }

        await connection(`to_do_list`).insert(task)

        res.status(201).send("Task created successfully.")
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        res.status(400).send(error.message)
    }
})

app.get('/todolist/:id', async (req: Request, res: Response) => {
    try {
        const result = await connection(`to_do_list`)
            .select(
                "to_do_list.task_id",
                "to_do_list.title",
                "to_do_list.description",
                "to_do_list.limitDate",
                "to_do_list.status",
                "to_do_list.creatorUserId",
                "to_do_list_users.nick")
            .join('to_do_list_users', 'to_do_list.task_id', 'to_do_list_users.id')
            .where({
                task_id: req.params.id
            })
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Task not found.");
    }
})