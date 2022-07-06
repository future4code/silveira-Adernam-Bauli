import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase {
    protected TABLE_NAME = "labook_posts"

    insert = async (post: Post): Promise<void> => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(post);
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    getPostById = async (id: string) => {
        try {
            const result = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ id })

            if (!result[0]) {
                throw new Error("Post não encontrado.");
            }

            return result[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
}