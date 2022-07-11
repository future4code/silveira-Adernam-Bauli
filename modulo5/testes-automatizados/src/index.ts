import { User } from "./types/user";


export const adernam: User = {
    name: "Adernam",
    balance: 1000
}


export function performPurchase(user: User, value: number): User | undefined {

    const { name, balance } = user;

    const newBalance: number = balance - value;

    if(balance < value) {
        return undefined;
    } else {
        const newUser: User = {
            name,
            balance: newBalance
        }

        return newUser;
    }
   
}