import { Carousel } from "flowbite-react"

export const DogCarousel = () => {
    return (
        <div className="relative w-1/2 h-full">
            <Carousel slideInterval={3000} indicators={false} leftControl={<></>} rightControl={<></>}>
                {
                    images.map(image => <img src={image.path} key={image.id} className="object-cover h-full"></img>)
                }
            </Carousel>
        </div>
    )
}

const images = [
    {
        id: 1,
        path: "image_auth_dog_1.jpg",
    }, {
        id: 2,
        path: "image_auth_dog_2.jpg",
    }, {
        id: 3,
        path: "image_auth_dog_3.jpg",
    }, {
        id: 4,
        path: "image_auth_dog_4.jpg",
    }, {
        id: 5,
        path: "image_auth_dog_5.jpg",
    }, {
        id: 6,
        path: "image_auth_dog_6.jpg",
    }, {
        id: 7,
        path: "image_auth_dog_7.jpg",
    }, {
        id: 8,
        path: "image_auth_dog_8.jpg",
    },
]
