import { Request, Response } from 'express';
import PublicationService from "./PublicationService";
import { IPublication } from './IPublication';
import { CreatePublicationDto } from './dtos/publications.dto';
import { validate } from 'class-validator';


export default class PublicationController {
    private publicationService: PublicationService;

    constructor(publicationService: PublicationService) {
        this.publicationService = publicationService;
    }

    async createPublication(req: Request, res: Response) {
        try {
            // data validation
            const publication: IPublication = {
                owner: "email@gmail.com",        //TODO: que salga del JWT
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
                pets: req.body.pets,
                contact: req.body.contact,
                petSitter: null,
                status: "active"
            };

            const createPublicationDto = new CreatePublicationDto(publication)
            const errors = await validate(createPublicationDto);
            if (errors.length > 0) {
                console.log(errors);
                return res.status(400).json({
                    message: "Invalid data"
                })
            };
            
            const result = this.publicationService.createPublication(publication);

            if (result) {
                return res.status(201).json({
                    message: "Publication created"
                });
            };
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "Internal server error"
            });
        }
    }
};
