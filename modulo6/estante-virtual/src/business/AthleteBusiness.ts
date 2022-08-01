import AthleteData from '../data/AthleteData';
import CompetitionData from '../data/CompetitionData';
import Athlete from '../model/Athlete';
import { IdGenerator } from '../services/IdGenerator';
import { CreateAthleteDTO } from '../types/createAthleteDTO';

export default class AthleteBusiness {

    constructor(
        private athleteData: AthleteData,
        private idGenerator: IdGenerator,
        private competitionData: CompetitionData
    ) { }

    create = async (input: CreateAthleteDTO) => {

        const { competition, name, value, unity } = input
        if (
            !competition ||
            !name ||
            !value ||
            !unity) {
            throw new Error('Plese check the fields!.')
        };

        const getCompetition = await this.competitionData.getCompetition(competition);

        const competitionEnded = getCompetition.ended_at;

        if(competitionEnded) {
            throw new Error('Competition ended.');
        };

        const registeredUser = await this.athleteData.findByName(name)
        if (registeredUser) {
            throw new Error('Athlete already registred.')
        };

        const competitionAlreadyExist = await this.athleteData.findCompetition(competition)
        
        if(!competitionAlreadyExist.length) {
            throw new Error('Competition not found.')
        };

        const id = this.idGenerator.generateId();

        const user = new Athlete(
            id,
            name,
            value,
            unity,
            competitionAlreadyExist[0].id
        );
        
        await this.athleteData.insert(user);

        return user;
    };
};