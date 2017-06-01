import { credentials } from '../interfaces/credentials';

export class Credentials implements credentials {
    account?: string;

    username: string;

    password: string;

    constructor() {
        this.account = '';
        this.username = '';
        this.password = '';
    }
}
