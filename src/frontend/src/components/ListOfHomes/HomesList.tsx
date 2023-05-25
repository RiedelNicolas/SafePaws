import {CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const products = [
    {
      id: 1,
      name: 'Lovely Apartment',
      href: '#',
      dateFrom: 'July 11, 2021',
      dateTo: 'July 20, 2021',
      imageSrc: 'https://picsum.photos/200/300?random=1',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      location : 'Paris, France'
    },
    {
      id: 2,
      name: 'Cabin in the Woods',
      href: '#',
      dateFrom: 'July 11, 2021',
      dateTo: 'July 20, 2021',
      imageSrc: 'https://picsum.photos/200/300?random=2',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      location : 'San Francisco, California'
    },
    {
      id: 3,
      name: 'Castle in the hill',
      href: '#',
      dateFrom: 'July 11, 2021',
      dateTo: 'July 20, 2021',
      imageSrc: 'https://picsum.photos/200/300?random=3',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
       location : 'London, England'
    },
    {
      id: 4,
      name: 'Dream Home',
      href: '#',
      dateFrom: 'July 11, 2021',
      dateTo: 'July 20, 2021',
      imageSrc: 'https://picsum.photos/200/300?random=4',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      location : 'BS AS, Argentina'
    },
    {
        id: 5,
        name: 'Hello There',
        href: '#',
        dateFrom: 'July 11, 2021',
        dateTo: 'July 20, 2021',
        imageSrc: 'https://picsum.photos/200/300?random=5',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        location : "Montevideo, Uruguay"
        },
    // More products...
  ]


export const HomesList = () => {
    return (

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                        </div>
                        <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>

                        <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1 text-gray-500" />
                            <p className="mt-1 text-sm font-medium text-gray-900">{`${product.dateFrom} to ${product.dateTo}`}</p>
                        </div>

                        <div className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                            <p className="mt-1 text-sm font-medium text-gray-900">{`${product.location}`}</p>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
  