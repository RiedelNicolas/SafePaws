import PublicationRepository from "./PublicationRepository";

export default class PublicationService {
    private publicationRepository: PublicationRepository;

    constructor(publicationRepository: PublicationRepository) {
        this.publicationRepository = publicationRepository;
    }

    createPublication(
        owner: string,
        title: string,
        description: string,
        location: string,
        mascot: string,
        contact: string,
        petSitter: string,
        status: string
    ) {
        return this.publicationRepository.createPublication(
            owner,
            title,
            description,
            location,
            mascot,
            contact,
            petSitter,
            status 
        );
    }
}