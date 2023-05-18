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
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <img
          src="image_dog_register.jpg"
          className="object-cover h-full"
        ></img>
      </div>
    </div>
  )
}
