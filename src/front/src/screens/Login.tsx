import { DogCarousel } from "../components/DogCarousel";
import { LoadingCircle } from "../components/LoadingCircle"
import { LoginForm } from "../components/LoginForm"
import { useAppSelector } from "../store";

export const Login = () => {

  const { status } = useAppSelector(state => state.auth);

  return (
    <div className="flex w-full h-screen bg-stone-400">
      <div className={`relative ${(status === "checking") ? "opacity-40" : ""} w-full flex items-center justify-center lg:w-1/2`}>

        <LoginForm />
        {
          (status === "checking") ? <LoadingCircle /> : <></>
        }

      </div>
      <DogCarousel />
    </div>
  )
}

