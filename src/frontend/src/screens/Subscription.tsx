import { useEffect, useState } from "react"
// import { usePaymentInputs } from 'react-payment-inputs';
import { useAppSelector, useAppDispatch } from "../store/hook";
import { logout, pay } from "../features/authSlice";
import { successToast } from "../utils/toast";
import api from "../api/api";
// import images from 'react-payment-inputs/images';
// import { payFee } from "../features/authSlice";

export const Subscription = () => {

  const authState = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  


  useEffect(() => {
    if (authState.email) {
      setEmail(authState.email);
    }
    if (authState.phoneNumber){
      setPhone(authState.phoneNumber);
    }
  }, [authState]);

  function inputHeader(text: string) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text: string) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header: string, description: string) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  const handleSubmit =  () => {
    submit();
  }


  const submit = async () => {
    try{
        api.post('/users/pay',{email:authState.email});
        successToast("Payment Successful, enjoy the app!");
      dispatch(pay());
    }catch(err){
      console.log(err);
    }
  }

  
  const handleCancel = () => {
    dispatch(logout());
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:"column" }}>
      <header className="bg-white shadow mt-8 border rounded-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">A monthly fee of $5 is required</h2>
          <p>
            We believe that this small investment will provide you with great value and help you keep your pets and homes secure. Thank you for choosing our service!
          </p>
        </div>
      </header>
      <div className="p-8 w-2/4" style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
        <div className='w-full rounded-3xl bg-white border-4 border-gray-100'>
          <div style={{ display: "flex", justifyContent: "center" }} className="mt-12 mb-12 h-full w-full">
            <div className="w-3/4 h-1/2">
              <div>
              <form className="flex flex-wrap gap-3 w-full p-5">
                <label className="relative w-full flex flex-col">
                  <span className="font-bold mb-3">Card number</span>
                  <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_number" placeholder="0000 0000 0000" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold mb-3">Expire date</span>
                  <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="expire_date" placeholder="MM/YY" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold flex items-center gap-3 mb-3">
                    CVC/CVV
                    <span className="relative group">
                      <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Hey ceci est une infobulle !</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </span>
                  <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_cvc" placeholder="&bull;&bull;&bull;" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </label>
                 </form>
                  <button
                   onClick={handleSubmit}
                    className='w-full mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                    >
                    Pay
                  </button>
                  <button
                    onClick={handleCancel}
                    className='w-full mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-red-500 rounded-xl text-white font-bold text-lg'
                  >
                    Logout
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}