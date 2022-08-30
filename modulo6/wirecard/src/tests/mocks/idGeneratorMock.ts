import { IdGenerator } from '../../services/IdGenerator';

export class IdGeneratorMock extends IdGenerator {
    public generate(): string {
        return 'id';
    };
};