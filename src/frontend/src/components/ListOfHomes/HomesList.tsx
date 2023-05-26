import {CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Publications } from './getHomes';
import { PrimaryPhoto } from './PrimaryPhoto';

interface Props {
    publications: Publications[];
}

export const HomesList = ({publications} : Props) => {
    return (

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {publications.map((publication) => (
                    <a key={publication.ownerName} href={""} className="group">
                        
                        <PrimaryPhoto email={publication.owner}/>
                        
                        <h3 className="mt-4 text-lg text-gray-700">{publication.title}</h3>

                        <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1 text-gray-500" />
                            <p className="mt-1 text-sm font-medium text-gray-900">{`${publication.dateStart} to ${publication.dateEnd}`}</p>
                        </div>

                        <div className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                            <p className="mt-1 text-sm font-medium text-gray-900">{`${publication.location}`}</p>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
  