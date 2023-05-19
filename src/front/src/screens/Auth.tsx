import { useAppSelector } from "../store";
import { LoadingCircle } from "../components/LoadingCircle";
import { DogCarousel } from "../components/DogCarousel";
import { PropsWithChildren } from "react";

export const Auth = ({ children }: PropsWithChildren) => {

    const { status } = useAppSelector(state => state.auth);

    return (
        <>
            <div className="flex w-full h-screen bg-stone-400">
                <div className="absolute w-full h-full">
                    <img src={"image_auth_fireplace.jpg"} className="w-1/2 object-cover h-full rounded-lg"></img>
                </div>

                <div className={`relative ${(status === "checking") ? "opacity-70" : ""} w-full flex items-center justify-center lg:w-1/2`}>
                    {children}
                    {
                        (status === "checking") ? <LoadingCircle /> : <></>
                    }
                </div>
                <DogCarousel />
            </div>
        </>
    )
}
