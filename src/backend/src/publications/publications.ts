import express from 'express';
import { Request, Response } from 'express';
import PublicationController from "./PublicationController";
import PublicationService from "./PublicationService";
import PublicationRepository from './PublicationRepository';
import { CreatePublicationDto } from './dtos/publications.dto';
import { validate } from 'class-validator';

const router = express.Router();
const publicationRepository = new PublicationRepository
const publicationService = new PublicationService(publicationRepository);
const publicationController = new PublicationController(publicationService);

router.post('/create', async (req: Request, res: Response) => {
    publicationController.createPublication(req, res);
});

router.get('/', async (req: Request, res: Response) => {
    publicationController.getPublications(req, res);
})

module.exports = router;
