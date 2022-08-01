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

  createCompetition = async (input: CreateCompetitionDTO): Promise<string> => {
    const { name } = input;

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
  };

  finishCompetition = async (competitionName: string): Promise<void> => {
      if (!competitionName) {
        throw new Error('Please check the fields!.');
      };

      const competitionWithoutEndedDate = await this.competitionData.getCompetition(competitionName);

      if(!competitionWithoutEndedDate.length) {
        throw new Error('Competition not found.');
      };

      const competitionAlreadyEnded = competitionWithoutEndedDate[0].ended_at;

      if(competitionAlreadyEnded) {
        throw new Error('Competition already ended.');
      };

      const date = new Date();

      await this.competitionData.finishCompetition(date, competitionName);

      const competitionWithNewEndedDate = await this.competitionData.getCompetition(competitionName);

      return competitionWithNewEndedDate[0].ended_at;
  };

  getRanking = async (competitionName: string): Promise<string> => {
      if (!competitionName) {
        throw new Error('Please check the fields!.');
      };

      const competitionAlreadyExist = await this.athleteData.findCompetition(competitionName)

      if (!competitionAlreadyExist.length) {
        throw new Error('Competition not found.');
      };

      const ranking = await this.competitionData.getRanking(competitionAlreadyExist[0].id);

      return ranking[0];
  };
}