import { useState } from "react"
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export const Subscription = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const { getCardImageProps, meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

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

  const submitPayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Pay")
  }

  return (

    <div className="p-8 w-3/4" style={{ display: "flex", justifyContent: "center" }}>
        
      <div className='w-full rounded-3xl bg-white border-4 border-gray-100'>

        <div style={{ display: "flex", justifyContent: "center" }} className="mt-12 mb-12 h-full w-full">
          <div className="w-3/4 h-1/2">

            <div>
              <form onSubmit={submitPayment}>
                {preInput('First Name', '')}
                <input
                  type="text"
                  value={firstName}
                  onChange={ev => setFirstName(ev.target.value)}
                  placeholder="First Name"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                {preInput('Last Name', '')}
                <input
                  type="text"
                  value={lastName}
                  onChange={ev => setLastName(ev.target.value)}
                  placeholder="Last Name"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                {preInput('Address', '')}
                <input
                  type="text"
                  value={address}
                  onChange={ev => setAddress(ev.target.value)}
                  placeholder="Address"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                {preInput('Email', '')}
                  <input
                    type="text"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    placeholder="Email"
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                {preInput('Phone', '')}
                <input
                  type="text"
                  value={phone}
                  onChange={ev => setPhone(ev.target.value)}
                  placeholder="Phone"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                {preInput('Card Info', '')}
                <div>
                  <div className="flex-row">
                    <svg {...getCardImageProps({ images })}/>
                    {/* TODO: Set hardcoded width because this will always be 16 numbers */}
                    <input {...getCardNumberProps({ onChange: (ev: any) => setCardNumber(ev.target.value) })} value={cardNumber} className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="0000 0000 0000 0000"/>
                  </div>
                  <input {...getExpiryDateProps({ onChange: (ev: any) => setExpiryDate(ev.target.value) })} value={expiryDate} className="w-1/5 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"/>
                  <input {...getCVCProps({ onChange: (ev: any) => setCVV(ev.target.value) })} value={cvv} className="w-1/5 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"/>
                  {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                </div>
                
                <button
                  type="submit"
                  className='w-full mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                >
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
