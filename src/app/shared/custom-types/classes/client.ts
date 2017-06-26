import { client } from '../interfaces/client';

export class Client implements client {

    public clientid: string;

    public clientno: string;

    public merchantkey: string;

    public ipaddress: string;

    public merchantid: string;

    public clientname: string;

    public appttaskuserno: string;

    public appttaskgroup: string;

    public useusernoforappttask: boolean;

    public cancelappttaskuserno: string;

    public cancelappttaskgroup: string;

    public useusernoforcancelappttask: boolean;

    public demographicupdatetaskuserno: string;

    public demographicupdatetaskgroup: string;

    public useusernofordemographicupdatetask: boolean;

    public secureemail: string;

    public roles: any[];

    public locations: any[];
}
