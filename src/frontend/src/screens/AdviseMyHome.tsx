import { useState } from "react"
import { PhotosUploader } from "../components/PhotosUploader"
import { Perks } from "../components/Perks";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { AddPetsList, Pet } from "../components/AddPetsList";

export const AdviseMyHome = () => {

  const [pets, setPets] = useState<Pet[]>([]);

  const [value, setValue] = useState<DateValueType>({
      startDate: new Date(),
      endDate: new Date("May 28, 2023"),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [maxGuests, setMaxGuests] = useState<string>("1");
  const [perks, setPerks] = useState<string[]>([]);

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

  const savePlace = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Save Place")
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Advice your home, get your pet sitted!</h1>
        </div>
      </header>
      <div className="p-8" style={{ display: "flex", justifyContent: "center" }}>
        <div className='w-full rounded-3xl bg-white border-4 border-gray-100'>
          <div style={{ display: "flex", justifyContent: "center" }} className="mt-12 mb-12 h-full w-full">
            <div className="w-3/4 h-1/2">

              <div>
                <form onSubmit={savePlace}>
                  {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
                  <input
                    type="text"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                    placeholder="My lovely apartment"
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                  {preInput('Address', 'Adress of your place, no need to be exact')}
                  <input
                    type="text"
                    value={address}
                    onChange={ev => setAddress(ev.target.value)}
                    placeholder="Address"
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" />
                  {preInput('Photos', 'At leaste one, More = Better')}
                  <PhotosUploader />
                  {preInput('Description', 'Description of the place')}
                  <textarea
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                    style={{minHeight: "100px"}}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {preInput('Perks', 'Select all the perks of your place')}
                  {<div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks perks={perks} setPerks={setPerks} />
                  </div>}
                  {preInput('Pets', 'Describe the pets you have, the sitter will take care of them :)')}
                  <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <AddPetsList  pets={pets} setPets={setPets}/>
                  </div>
                  {preInput('Extra information', 'House rules, etc')}
                  <textarea
                    value={extraInfo}
                    style={{minHeight: "100px"}}
                    onChange={ev => setExtraInfo(ev.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {preInput('Accommodation information', 'Add information about the stayover')}
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    <div className="mr-3">
                      <h3 className="mt-2 -mb-1">Check in & out time</h3>
                      <div className="mt-1">
                        <Datepicker
                          value={value}
                          onChange={handleValueChange}
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="mt-2 -mb-1">Max number of guests</h3>
                      <input type="number" value={maxGuests}
                        onChange={event => setMaxGuests(event.target.value)}
                        className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className='w-full mt-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
