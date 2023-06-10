import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Publications } from './getHomes';
import { PrimaryPhoto } from './PrimaryPhoto';
import { Link } from "react-router-dom";
import { encodeEmail } from '../../utils/encodeEmail';


interface Props {
    publications: Publications[];
}

export const HomesList = ({ publications }: Props) => {
    return (

        <div className="bg-white rounded-3xl bg-white border-4 border-gray-100">
            <div className="flex justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Find the best suite for you</h1>
            </div>
            <div className="mt-2 mb-8 mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {publications.map((publication) => (
                        <Link key={publication.ownerName} to={"/house/" + encodeEmail(publication.owner)} className="group">

                            <PrimaryPhoto email={publication.owner} />

                            <h3 className="mt-4 text-lg text-gray-700">{publication.title}</h3>

                            <div className="flex items-center">
                                <CalendarIcon className="w-4 h-4 mr-1 text-gray-500" />
                                <p className="mt-1 text-sm font-medium text-gray-900">{`${publication.dateStart} to ${publication.dateEnd}`}</p>
                            </div>

                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                                <p className="mt-1 text-sm font-medium text-gray-900">{`${publication.location}`}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
