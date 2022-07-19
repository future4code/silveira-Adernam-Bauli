import PostData from "../data/CompetitionData";
import { IdGenerator } from "../services/IdGenerator";
import Post from "../model/Post";
import { CreateCompetitionDTO } from "../types/createPostDTO";


export default class CompetitionBusiness {

  constructor(
    private competitionData: PostData,
    private idGenerator: IdGenerator
  ) { }

  createPost = async (input: CreateCompetitionDTO): Promise<string> => {
    const { name } = input;
    try {
      if (!input) {
        throw new Error("Insira um nome para a competição.");
      }

      const id = this.idGenerator.generateId();

      const date = new Date();

      const newCompetition = new Post(
        id,
        name,
        date
      );

      await this.competitionData.insert(newCompetition);

      return id;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getPostById = async (id: string): Promise<Post> => {
    try {
      if (!id || id === ":id") {
        throw new Error("Insira um id.")
      }

      const post: Post = await this.competitionData.getPostById(id);

      return post;

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}