import Post from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";

export default class CompetitionData extends BaseDatabase {
    protected TABLE_NAME = "jogos_olimpicos_competicao"

    insert = async (post: Post): Promise<void> => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(post);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    };

    getRanking = async (competitionId: string) => {
        try {
            const result = await this.connection.raw(`
                SELECT name, value
                FROM jogos_olimpicos_athletes
                WHERE competition_id = "${competitionId}"
                ORDER BY value DESC
            `)

            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}