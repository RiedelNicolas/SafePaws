import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { startCreatingUserWithEmailPassword } from '../features';

type RegisterData = {
    email: string,
    password: string,
    username: string
};

export const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state) => state.auth);

    const { register, handleSubmit } = useForm<RegisterData>();
    const onSubmit: SubmitHandler<RegisterData> = formData => {
        dispatch(startCreatingUserWithEmailPassword({
            email: formData.email,
            password: formData.password,
            username: formData.username
        }));
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: "100px", height: "100px" }} src='icon.svg'></img>
                <h1 className='text-5xl font-semibold'>Safe Paws</h1>
            </div>
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

                    <div style={{ display: (error) ? "" : 'none' }} className="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Ups! </strong>
                        <span className="block sm:inline">It seems your credentials are incorrect or invalid.</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                    </div>

                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already have an account?</p>
                    <button
                        className='ml-2 font-medium text-base text-violet-500'
                        onClick={navigateToLogin}
                    >Login</button>
                </div>
            </div>
        </div>
    );
}
