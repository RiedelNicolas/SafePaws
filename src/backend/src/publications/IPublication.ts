export interface IPublication {
    owner: string;
    title: string;
    description: string;
    location: string;
    dateStart: Date;
    dateEnd: Date;
    pets: Array<IPet>;
    contact: string;
    petSitter: string;
    status: string;
};

export interface IPet {
    name: string;
    type: string;
};
