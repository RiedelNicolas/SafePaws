import PublicationRepository from "./PublicationRepository";
import { IPublication } from './IPublication';

export default class PublicationService {
    private publicationRepository: PublicationRepository;

    constructor(publicationRepository: PublicationRepository) {
        this.publicationRepository = publicationRepository;
    }

    createPublication(publication: IPublication) {
        return this.publicationRepository.createPublication(publication);
    }
};
