// tslint:disable-next-line
export interface client {

    clientid: string;

    clientno: string;

    merchantkey: string;

    ipaddress: string;

    merchantid: string;

    clientname: string;

    appttaskuserno: string;

    appttaskgroup: string;

    useusernoforappttask: boolean;

    cancelappttaskuserno: string;

    cancelappttaskgroup: string;

    useusernoforcancelappttask: boolean;

    demographicupdatetaskuserno: string;

    demographicupdatetaskgroup: string;

    useusernofordemographicupdatetask: boolean;

    secureemail: string;

    roles: any[];

    locations: any[];
}
