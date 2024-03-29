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
                owner: req.body.owner,
                ownerName: req.body.ownerName,
                maxSitters: req.body.maxSitters,
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

            console.log(publication);

            const errors = await validatePublication(publication);
            if (errors.length > 0 || !validateDate(publication)) {
                console.log(errors);
                return this.sendInvalidData(res);
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
    };

    async getPublications(req: Request, res: Response) {
        try {
            const publications = await this.publicationService.getPublications();
            return res.status(200).json({
                message: "All publications",
                data: publications
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "Internal server error"
            });
        }
    }

    async getOwnerPublication(req: Request, res: Response) {
        const owner = req.params.owner;
        try {
            const publication = await this.publicationService.getOwnerPublication(owner);
            if (publication) {
                return res.status(200).json({
                    message: "Success to get the publication",
                    data: publication
                });
            } else {
                return this.sendInvalidData(res);
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "Internal server error"
            });
        }
    }

    sendInvalidData(res: Response) {
        return res.status(400).json({
            message: "Invalid data"
        })
    }
};
