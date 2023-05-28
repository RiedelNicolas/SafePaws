import { PropsWithChildren } from "react";
import {  useAppSelector } from "../store/hook";
import { LoadingCircle } from "../components/LoadingCircle";
import { DogCarousel } from "../components/DogCarousel";
import { HouseCarousel } from "../components/HouseCarousel";

export const Auth = ({ children }: PropsWithChildren) => {

    const { status } = useAppSelector(state => state.auth);

    return (
        <>
            <div className="flex w-full h-screen bg-stone-400">
                <div className="absolute w-full h-full">
                    <HouseCarousel />
                </div>
                <div className={`relative ${(status === "checking") ? "opacity-70" : "opacity-95"} w-full flex items-center justify-center lg:w-1/2`}>
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
