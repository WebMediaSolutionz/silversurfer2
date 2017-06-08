import { credentials } from '../interfaces/credentials';

export class Credentials implements credentials {
    public account?: string;

    public username: string;

    public password: string;

    constructor() {
        this.account = '';
        this.username = '';
        this.password = '';
    }
}
