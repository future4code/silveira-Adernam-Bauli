import CompetitionData from "../data/CompetitionData";
import AthleteData from "../data/AthleteData";


export default class CompetitionRankingBusiness {

  constructor(
    private competitionData: CompetitionData,
    private athleteData: AthleteData
  ) { }

  getCompetitionRanking = async (competitionName: string): Promise<string> => {

    try {
      if (!competitionName) {
        throw new Error("Insira o nome de uma competição.");
      }

      const competitionAlreadyExist = await this.athleteData.findCompetition(competitionName)
        
        if(!competitionAlreadyExist.length) {
            throw new Error('Competição não encontrada')
        }

      const ranking = await this.competitionData.getRanking(competitionAlreadyExist[0].id);

      return ranking[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}