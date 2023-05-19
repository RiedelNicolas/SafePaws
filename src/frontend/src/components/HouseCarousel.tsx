import { Carousel } from "flowbite-react"

export const HouseCarousel = () => {
    return (
        <div className="relative w-1/2 h-full">
            <Carousel slideInterval={4000} indicators={false} leftControl={<></>} rightControl={<></>}>
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
        path: "image_auth_house_1.jpg",
    }, {
        id: 2,
        path: "image_auth_house_2.jpg",
    }, {
        id: 3,
        path: "image_auth_house_3.jpg",
    }, {
        id: 4,
        path: "image_auth_house_4.jpg",
    }, {
        id: 5,
        path: "image_auth_house_5.jpg",
    }, {
        id: 6,
        path: "image_auth_house_6.jpg",
    }, {
        id: 7,
        path: "image_auth_house_7.jpg",
    }
]
