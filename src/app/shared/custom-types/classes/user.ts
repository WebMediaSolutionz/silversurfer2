import { user } from '../interfaces/user';

export class User implements user {
    account?: string = 'qb1486';

    firstname: string;

    lastname: string;

    username: string;

    password: string;

    constructor() {
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.password = '';
    }
}
