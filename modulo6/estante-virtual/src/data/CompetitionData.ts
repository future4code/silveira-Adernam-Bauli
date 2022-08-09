import Post from '../model/Competition';
import { BaseDatabase } from './BaseDatabase';

export default class CompetitionData extends BaseDatabase {
    protected TABLE_NAME = 'jogos_olimpicos_competicao';

    insert = async (post: Post): Promise<void> => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(post)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Database error!');
            };
        };
    };

    finishCompetition = async (date: Date, competitionName: string): Promise<void> => {
        try {
            await this
            .connection(this.TABLE_NAME)
            .where({ name: competitionName })
            .update({
                ended_at: date
            })
        } catch {
            throw new Error('Database error!');
        };
    };

    getCompetition = async (competitionName: string): Promise<any> => {
        try {
            const result = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ name: competitionName })

            return result;
        } catch (error) {
            throw new Error('Database error!');
        };
    };

    getRanking = async (competitionId: string) => {
        try {
            const result = await this.connection.raw(`
                SELECT name, value
                FROM jogos_olimpicos_athletes
                WHERE competition_id = '${competitionId}'
                ORDER BY value DESC
            `);

            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Database error!');
            };
        };
    };
};