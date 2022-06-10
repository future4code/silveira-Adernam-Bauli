import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";









































// 1)
// a) Não muda nada na resposta, só muda o jeito de fazer.

app.get('/actor', async (req: Request, res: Response) => {
    try {
        // const result = await connection.raw(`select id, name from Actor`)
        const result = await connection(`Actor`)
            .select(`*`)
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Erro")
    }
})

// b)

app.get('/actor/querygender', async (req: Request, res: Response) => {
    try {
        const result = await connection(`Actor`)
            .count(`*`)
            .where({
                gender: req.query.gender
            })
        console.log(result);
        res.send(result[0]);
    } catch (error) {
        console.log(error);
        res.status(400).send("Erro");
    }
})

app.get('/actor/:name', async (req: Request, res: Response) => {
    try {
        const result = await connection(`Actor`)
            .select(`*`)
            .where({
                name: req.params.name
            })
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send("Erro");
    }
})

// c)

app.get('/actor/count/:gender', async (req: Request, res: Response) => {
    try {
        const result = await connection(`Actor`)
            .count(`*`)
            .where({
                gender: req.params.gender
            })
        // console.log(result[0].contagem)
        res.send(result[0])
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})




// 2)
// a)

app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection(`Actor`)
            .update({
                salary: req.body.salary
            })
            .where({ id: req.params.id })
        res.send(`Actor ${req.params.id} updated successfully!`)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

// b)




app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {
        const deletedRows = await connection(`Actor`)
            .delete()
            .where({
                id: req.params.id
            })

        if (deletedRows === 0) {
            throw new Error()
        }

        res.send('Actor deleted.')
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

// c)

app.get('/actor/gender/avg', async (req: Request, res: Response) => {
    try {
        const genderAvg = await connection(`Actor`)
            .avg("salary as average")
            .where({
                gender: req.body.gender
            })

        res.send(genderAvg)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

// 3)
// a)

app.get('/actor/id/:id', async (req: Request, res: Response) => {
    try {
        const result = await connection(`Actor`)
            .select(`*`)
            .where({
                id: req.params.id
            })
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})





// 4)
// a)

app.put("/salarychange/actor", async (req: Request, res: Response) => {
    try {
        await connection(`Actor`)
            .update({
                salary: req.body.salary
            })
            .where({ id: req.body.id })
        res.send(`Actor updated successfully!`)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})



app.post("/actor", async (req, res) => {
    try {
        const { name, genreFilm, salary } = req.body

        type Actor = {
            name: string,
            genre_film: "love" | "action",
            salary: number
        }

        const actor: Actor = {
            name, genre_film: genreFilm, salary
        }

        if (actor.genre_film !== "love" && actor.genre_film !== "action") {
            throw new Error()
        }

        await connection(`actor`).insert(actor)

        // await connection.raw(`
        //     INSERT INTO actor (name, genre_film, salary)
        //     VALUE (
        //     "${actor.name}", 
        //     "${actor.genreFilm}" ,
        //      ${actor.salary});
        // `)
        res.status(201).send("Created")
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        res.status(400).send("Erro")
    }
})

