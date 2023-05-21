import { IsArray, ArrayNotEmpty, IsOptional,
    MaxLength, IsNotEmpty, ArrayMaxSize, IsString,
    ValidateNested } from 'class-validator';
import { IPublication, IPet } from '../IPublication';

export class CreatePublicationDto implements IPublication {
    @MaxLength(255)
    @IsNotEmpty()
    owner: string;

    @MaxLength(255)
    @IsNotEmpty()
    title: string;

    @MaxLength(1000)
    @IsNotEmpty()
    description: string;

    @MaxLength(255)
    @IsNotEmpty()
    location: string;

    @ArrayMaxSize(200)
    @IsArray()
    @ArrayNotEmpty()
    pets: Array<IPet>;

    @MaxLength(255)
    @IsNotEmpty()
    contact: string;

    @IsOptional()
    @MaxLength(255)
    petSitter: string;

    @IsNotEmpty()
    status: string;

    constructor(args) {
        this.owner = args?.owner;
        this.title = args?.title;
        this.description = args?.description;
        this.location = args?.location;
        this.pets = args?.pets;
        this.contact = args?.contact;
        this.petSitter = args?.petSitter;
        this.status = args?.status;
    }
}

export class IPetDto implements IPet {
    @MaxLength(255)
    @IsNotEmpty()
    name: string;

    @MaxLength(255)
    @IsNotEmpty()
    type: string;

    constructor(args) {
        this.name = args?.name;
        this.type = args?.type;   
    }
}
