import { v4 } from 'uuid';

export class IdGenerator {
    public generate(): string {
        return v4();
    }
}


// também poderia ser feito assim pra ficar mais encurtado, porém seria com function e não com class

// const IdGenerator = () => v4();
// expor default IdGenerator