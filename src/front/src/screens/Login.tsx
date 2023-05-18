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
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <img
          src="image_dog_login.jpg"
          className="object-cover h-full"
        ></img>
      </div>
    </div>
  )
}
