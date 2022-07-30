import { IdGenerator } from '../services/IdGenerator';
import { CreateCompetitionDTO } from '../types/createCompetitionDTO';
import Competition from '../model/Competition';
import CompetitionData from '../data/CompetitionData';
import AthleteData from '../data/AthleteData';


export default class CompetitionBusiness {

  constructor(
    private competitionData: CompetitionData,
    private athleteData: AthleteData,
    private idGenerator: IdGenerator,
  ) { }

  createPost = async (input: CreateCompetitionDTO): Promise<string> => {
    const { name } = input;

    try {
      if (!input) {
        throw new Error('Please check the fields!.');
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
      throw new Error(error.sqlMessage || error.message);
    }
  };

  finishCompetition = async (competitionName: string): Promise<void> => {

    try {
      if (!competitionName) {
        throw new Error('Please check the fields!.');
      };

      const date = new Date();

      await this.competitionData.finishCompetition(date, competitionName);

      const competition = await this.competitionData.getCompetition(competitionName);

      return competition.ended_at;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    };
  };

  getRanking = async (competitionName: string): Promise<string> => {

    try {
      if (!competitionName) {
        throw new Error('Please check the fields!.');
      };

      const competitionAlreadyExist = await this.athleteData.findCompetition(competitionName)

      if (!competitionAlreadyExist.length) {
        throw new Error('Competition not found.');
      };

      const ranking = await this.competitionData.getRanking(competitionAlreadyExist[0].id);

      return ranking[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    };
  };
}