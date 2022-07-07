import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { CreatePostDTO } from "../types/createPostDTO";


export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    getPostById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string;
            const post = await this.postBusiness.getPostByIdLogic(id);

            res.status(200).send(post);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    createPost = async (req: Request, res: Response): Promise<void> => {
        const { photo, description, type } = req.body;

        const inputPostDTO: CreatePostDTO = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
        }

        try {
            const authorization: string = req.headers.authorization as string;

            if(!authorization) {
                throw new Error("Por favor insira um token.")
            }

            const idPost = await this.postBusiness.createPost(
                inputPostDTO,
                authorization
            );

            res.status(200).send({ message: "Post criado com sucesso!", idPost });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}