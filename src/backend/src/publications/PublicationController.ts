import { Request, Response } from 'express';
import PublicationService from "./PublicationService";
import { IPublication } from './IPublication';
import { CreatePublicationDto, IPetDto } from './dtos/publications.dto';
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
                dateStart: new Date(req.body.dateStart),
                dateEnd: new Date(req.body.dateEnd),
                pets: req.body.pets,
                contact: req.body.contact,
                petSitter: null,
                status: "active"
            };

            const errors = await this.validatePublication(res, publication);
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

    async validatePublication(res: Response, publication: IPublication) {
        var errors = [];

        const currentDate = new Date();
        console.log(currentDate);

        const createPublicationDto = new CreatePublicationDto(publication)
        errors = await validate(createPublicationDto);
        if (errors.length > 0) {
            return errors;
        }

        for (let i = 0; i < publication.pets.length; i++) {
            const pet: {name: string, type: string} = publication.pets[i];
            const IPetsDto = new IPetDto(pet)
            errors = await validate(IPetsDto);
            if (errors.length > 0) {
                return errors;
            };
        };

        return errors;
    }
};
