import { client } from '../app';
import { IPublication } from './IPublication';

export default class PublicationRepository {
    //private publication = client.db('SafePaws').collection('publications');

    async createPublication(publication: IPublication) {
        const publicationsDb = client.db('SafePaws').collection('publications');
        const result = await publicationsDb.findOneAndReplace(
            { owner: publication.owner },
            publication,
            { upsert: true }
        );
        return result;
    };

    async getPublications() {
        const publicationsDb = client.db('SafePaws').collection('publications');
        const publications = await publicationsDb.find({}).toArray();
        return publications;
    }

    async getOwnerPublication(owner: string) {
        const publicationsDb = client.db('SafePaws').collection('publications');
        const publication = await publicationsDb.find({
            owner: owner
        }).toArray();
        return publication;
    }
};
