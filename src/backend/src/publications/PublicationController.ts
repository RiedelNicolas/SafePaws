import { Request, Response } from 'express';
import PublicationService from "./PublicationService";
import { IPublication } from './IPublication';
import { validatePublication, validateDate } from './PublicationValidations';


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
                extraInfo: req.body.extraInfo,
                location: req.body.location,
                dateStart: new Date(req.body.dateStart),
                dateEnd: new Date(req.body.dateEnd),
                pets: req.body.pets,
                perks: req.body.perks,
                contact: req.body.contact,
                petSitter: null,
                status: "active"
            };

            const errors = await validatePublication(publication);
            if (errors.length > 0 || !validateDate(publication)) {
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
