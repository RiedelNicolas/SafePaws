export interface IPublication {
    owner: string;
    ownerName: string;
    maxSitters: number;
    title: string;
    description: string;
    extraInfo: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    pets: Array<IPet>;
    perks: Array<string>;
    contact: string;
    petSitter: string;
    status: string;
};

export interface IPet {
    name: string;
    type: string;
};
