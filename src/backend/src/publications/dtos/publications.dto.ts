import { IsArray, ArrayNotEmpty, IsOptional,
  MaxLength, IsNotEmpty, ArrayMaxSize } from 'class-validator';

export class CreatePublicationDto {
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
    @IsNotEmpty()
    pets: Array<string>;

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
