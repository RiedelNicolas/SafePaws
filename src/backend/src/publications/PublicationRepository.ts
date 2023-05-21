import { client } from '../app';
import { IPublication } from './IPublication';


export default class PublicationRepository {

    async createPublication(publication: IPublication) {
        const publications = client.db('SafePaws').collection('publications');
        const result = await publications.insertOne(publication);
        return result.acknowledged;
    }
}
