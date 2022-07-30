import User from '../model/Athlete'
import { FindByEmailResponse } from '../types/findByEmailResponse'
import { BaseDatabase } from './BaseDatabase'

export default class AthleteData extends BaseDatabase {
    protected TABLE_NAME = 'jogos_olimpicos_athletes'

    insert = async (user: User) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Database error!')
            }
        }
    }

    findByName = async (name: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ name })

            if (!queryResult) {
                throw new Error('Invalid name.');
            }

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Database error!')
            }
        }
    }

    findCompetition = async (competition: string) => {
        try {
            const result = await this
            .connection('jogos_olimpicos_competicao')
            .select()
            .where({ name: competition })

            return result;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Database error!')
            }
        }
    }
}