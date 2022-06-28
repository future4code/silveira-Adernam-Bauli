import connection from "../connection";


const getUserByEmail = async (email: string): Promise<any> => {

    const userTableName = 'Users'

    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email });

    return result[0];
}