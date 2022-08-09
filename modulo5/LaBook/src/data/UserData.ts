import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_users"

    insert = async (user: User) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            if (!queryResult) {
                throw new Error("Invalid username or password");
            }

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

}