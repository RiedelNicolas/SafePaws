import { DogCarousel } from "../components/DogCarousel";
import { LoadingCircle } from "../components/LoadingCircle";
import { RegisterForm } from "../components/RegisterForm"
import { useAppSelector } from "../store"

export const Register = () => {

  const { status } = useAppSelector(state => state.auth);

  return (
    <div className="flex w-full h-screen bg-stone-400">
      <div className={`relative ${(status === "checking") ? "opacity-40" : ""} w-full flex items-center justify-center lg:w-1/2`}>

        <RegisterForm />
        {
          (status === "checking") ? <LoadingCircle /> : <></>
        }

      </div>
      <DogCarousel />
    </div>
  )
}
