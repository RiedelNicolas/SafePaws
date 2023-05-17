import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hook';
import { login } from '../features/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

type RegisterData = {
  email: string,
  password: string,
  username: string
};

export const Register = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterData>();
  const onSubmit: SubmitHandler<RegisterData> = data => {
    console.log(data);
    handleRegister();
  }

  const handleRegister = () => {
    dispatch(login({ email: "asd", password: "asdasd" }));
  }

  const navigateToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="flex w-full h-screen bg-stone-400">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold'>Safe Paws</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome to Safe Paws! Let's get started on creating your account and unlocking a world of possibilities.</p>
          <div className='mt-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col'>
                <label className='text-lg font-medium'>Username</label>
                <input
                  {...register("username")}
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder="Enter your username" />
              </div>

              <div className='flex flex-col mt-4'>
                <label className='text-lg font-medium'>Email</label>
                <input
                  {...register("email")}
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder="Enter your email" />
              </div>

              <div className='flex flex-col mt-4'>
                <label className='text-lg font-medium'>Password</label>
                <input
                  {...register("password")}
                  className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                  placeholder="Enter your password"
                  type={"password"}
                />
              </div>
              <div className='mt-8 flex flex-col gap-y-4'>
                <button
                  className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign Up</button>
              </div>
              <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <button
                  className='ml-2 font-medium text-base text-violet-500'
                  onClick={navigateToLogin}
                >Login</button>
              </div>
            </form>
          </div>
        </div>
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
