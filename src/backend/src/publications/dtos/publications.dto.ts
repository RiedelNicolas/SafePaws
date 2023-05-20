import { IsOptional, MaxLength, IsNotEmpty } from 'class-validator';

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

    @MaxLength(255)
    @IsNotEmpty()
    mascot: string;

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
    this.mascot = args?.mascot;
    this.contact = args?.contact;
    this.petSitter = args?.petSitter;
    this.status = args?.status;
  }
}
