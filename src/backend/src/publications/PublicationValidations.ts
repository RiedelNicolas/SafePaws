import { Request, Response } from 'express';
import PublicationService from "./PublicationService";
import { IPublication } from './IPublication';
import { CreatePublicationDto, IPetDto } from './dtos/publications.dto';
import { validate } from 'class-validator';

export async function validatePublication(publication: IPublication) {
    var errors = [];

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
};

export function validateDate(publication: IPublication) {
    return publication.dateEnd > publication.dateStart;
}