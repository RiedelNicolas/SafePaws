import { client } from '../app';

export default class PublicationRepository {

    async createPublication(
        owner: string,
        title: string,
        description: string,
        location: string,
        mascot: string,
        contact: string,
        petSitter: string,
        status: string
    ) {
        const publications = client.db('SafePaws').collection('publications');
        const publication = {
            owner,
            title,
            description,
            location,
            mascot,
            contact,
            petSitter,
            status
        }
        const result = await publications.insertOne(publication);
        return result.acknowledged;
    }
}
