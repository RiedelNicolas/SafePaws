import { useState } from "react";

export type Pet = {
  name: string;
  type: string;
};

interface Props {
    pets: Pet[];
    setPets: (pets: Pet[]) => void;
}

export const AddPetsList = ({pets, setPets} : Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddPet = (pet: Pet) => {
    setPets([...pets, pet]);
    setShowModal(false);
  };

  const handleRemovePet = (index: number) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {pets.map((pet, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{pet.name}</h2>
              <p className="text-gray-500">{pet.type}</p>
            </div>

            <button
              className=" text-black py-2 px-2 rounded-lg"
              onClick={() => handleRemovePet(index)}
            >
              X
            </button>

          </li>
        ))}
      </ul>
      <button
        className="bg-violet-500 text-white py-2 px-4 rounded-lg mt-4 self-end"
        onClick={() => setShowModal(true)}
      >
        Add Pet
      </button>
      {showModal && <AddPetModal onAddPet={handleAddPet} onClose={() => setShowModal(false)} />}
    </div>
  );
};

type AddPetModalProps = {
  onAddPet: (pet: Pet) => void;
  onClose: () => void;
};

const AddPetModal = ({ onAddPet, onClose }: AddPetModalProps) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = () => {
    const pet = { name, type };
    onAddPet(pet);
  };

  return (
    <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Add your lovely Pet!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
                Specie
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              type="text"
              value={type}
              onChange={(event) => setType(event.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};