import { IdGenerator } from "../services/IdGenerator";
import Post from "../model/Competition";
import { CreateCompetitionDTO } from "../types/createCompetitionDTO";
import Competition from "../model/Competition";
import CompetitionData from "../data/CompetitionData";


export default class CompetitionBusiness {

  constructor(
    private competitionData: CompetitionData,
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

      const newCompetition = new Competition(
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