import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection('Users')
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserById(id: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('Users')
                .select('*')
                .where({ id });
            return user[0] && User.toUserModel1(user[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('Users')
                .select('*')
                .where({ email });
            return user[0] && User.toUserModel1(user[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection('Users').select(
                "id",
                "name",
                "email",
                "role"
            );

            return users.map((user => User.toUserModel1(user)))
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}