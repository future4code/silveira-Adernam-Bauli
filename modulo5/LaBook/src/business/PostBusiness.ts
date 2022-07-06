import PostData from "../data/PostData";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InputPostDTO } from "../types/inputPost";
import Post from "../model/Post";


export default class postLogic {

    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

  createPost = async (input: InputPostDTO, authorization: string): Promise<string> => {
    try {
        const { photo, description, type } = input;
      if (
        !photo ||
        !description ||
        !type
      ) {
        throw new Error("Cheque os campos.");
      }
      if (!authorization) {
        throw new Error("Insira um token.");
      }

      const author = this.authenticator.getTokenData(authorization);
      const id = this.idGenerator.generateId();

      const newPost = new Post (
        id,
        photo,
        description,
        type,
        createdAt: new Date(),
        authorId: author.id,
      );

      await this.postData.insert(newPost);

      return id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getPostByIdLogic = async (id: string): Promise<Post> => {
    try {
      if (!id) {
        throw new Error("Insira um id.");
      }

      const post: Post = await this.postData.getPostById(id);

      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}