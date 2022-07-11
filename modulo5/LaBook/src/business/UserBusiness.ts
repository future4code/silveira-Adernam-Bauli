import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../types/signupInputDTO";
import { userLogin } from "../types/userLogin";

export default class UserBusiness {

    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    signup = async (input: SignupInputDTO) => {

        const { name, email, password } = input
        if (
            !email ||
            !name ||
            !password) {
            throw new Error("Campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generateId()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
        )
        
        await this.userData.insert(user)

        const token: string = this.authenticator.generateToken({ id })

        return token
    }

    login = async (user: userLogin) => {

        const { email, password } = user;

        if (!email || !password) {
            throw new Error('Preencha os campos "email" e "password"')
        }

        const logged = await new UserData().findByEmail(user.email);

        const comparePass = await this.hashManager.compare(user.password, logged.password)

        if (!comparePass) {
            throw new Error('Credenciais inválidas')
        }

        const token: string = this.authenticator.generateToken({ id: logged.id })

        return token;

    }

}