export interface IPublication {
    owner: string;
    title: string;
    description: string;
    location: string;
    pets: Array<string>;
    contact: string;
    petSitter: string;
    status: string;
};

export interface IPets {
    [key: string]: string   // name: type of animal
};
