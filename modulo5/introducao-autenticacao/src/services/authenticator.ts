import * as jwt from "jsonwebtoken";
import { AuthenticationData } from '../types';
import dotenv from 'dotenv';

dotenv.config()

const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}

