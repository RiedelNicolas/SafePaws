import { useParams } from 'react-router-dom';
import { HouseGallery } from '../components/HouseGallery';
import { Publications, getHomeWithEmail } from '../components/ListOfHomes/getHomes';
import { useEffect, useState } from 'react';
import { decodeEmail } from '../utils/encodeEmail';
import { getPhotos } from '../components/ListOfHomes/getPhotos';
import { Button, Modal } from 'flowbite-react';

export const HouseDetail = () => {

  const { email } = useParams();
  const [publication, setPublication] = useState<Publications>()
  const [error, setError] = useState<string>('');

  const [photos, setPhotos] = useState<string[]>();

  const [showModal, setShowModal] = useState(false);


  const fetchHomes = async () => {
    if (email) {
      try{
        const publication = await getHomeWithEmail(decodeEmail(email));
        if(publication && !Array.isArray(publication)){
          setPublication(publication);
        }else{
          setError('No se encontró la publicación');
        }
      }catch(error){
        setError('No se encontró la publicación');
      }
    }
  }

  const fetchPhotos = async () =>{
    if (!email) return;
    const _photos = await getPhotos(decodeEmail(email));
    setPhotos(_photos);
  }

  useEffect(() => {
    fetchHomes();
    fetchPhotos();
  }, [email])

  if (!email) {
    return <div>404</div>
  }


  if (!publication || !photos) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="p-8" style={{ display: "flex", justifyContent: "center" }}>
      <div className='w-full rounded-3xl bg-white border-4 border-gray-100'>

        <div style={{ display: "flex", justifyContent: "center" }} className="mt-12 mb-12">
          <div className="w-3/4 h-1/2">

            <div className="text-center">
              <div className="text-4xl font-bold">{publication.title}</div>
              <div className="text-2xl font-light text-neutral-500 mt-2">{publication.location}</div>
            </div>

            <div className="mt-8" >
              <HouseGallery photos={photos}/>
            </div>

            <div className="mt-8 flex">
              <div className="w-1/2">
                <div className="text-start">
                  <div className="text-2xl font-bold">Description</div>
                  <div className="font-light text-neutral-500 mt-2 mx-2">
                    {publication.description}
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="text-start">
                  <div className="text-2xl font-bold">Information</div>
                  <div className="font-light text-neutral-500 mt-2">
                    <div className="w-full">
                      <div className="text-sm font-bold text-neutral-700 mb-1">Available</div>
                      <div className="text-sm text-neutral-600">{`${publication.dateStart} to ${publication.dateEnd}`}</div>
                    </div>
                    <div className="w-full mt-4">
                      <div className="text-sm font-bold text-neutral-700 mb-1">Pets to take care of</div>
                      <div className="text-sm text-neutral-600">
                        <ul className="list-disc list-inside">
                          {publication.pets.map((pet, index) => (
                            <li key={index}>
                              <span className="font-bold">{pet.name}</span> - {pet.type}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>


                    <div className="w-full mt-4">
                      <div className="text-sm font-bold text-neutral-700 mb-1">Perks</div>
                      <div className="text-sm text-neutral-600">
                        <ul className="list-disc list-inside">
                          {publication.perks.map((x, index) => (
                            <li key={index}>
                              <span className="font-bold capitalize">{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    
                    <div className="w-full mt-4">
                      <div className="text-sm font-bold text-neutral-700 mb-1">Max sitters</div>
                      <div className="text-sm text-neutral-600">{publication.maxSitters}</div>
                    </div>
                    <div className="w-full mt-4">
                      <div className="text-sm font-bold text-neutral-700 mb-1">Extra details</div>
                      <div className="text-sm text-neutral-600">{publication.extraInfo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="w-full py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
              onClick={()=>{setShowModal(true)}}
              >
                Reserve this place
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ContactInfoModal onClose={()=>{setShowModal(false)}} showModal={showModal} publication={publication}/>
    </div>
  )
}



interface modalProps {
  publication: Publications;
  showModal: boolean;
  onClose: () => void;
}

const ContactInfoModal = ({ publication, showModal, onClose }: modalProps) => {
  const closeModal = () => {
    // Add code to close the modal here
  };

  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        Contact the Home owner!
    </Modal.Header>
  <Modal.Body>
    <div className="space-y-6">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Please note that the service is still under construction. However, here are the contact details of the host owner. Kindly remember to be polite. We anticipate that in the near future, you will be able to contact them directly within the app. Thank you for your understanding as we work on enhancing the platform.
      </p>
    </div>
    <div className="py-5">
      <div className="font-bold text-purple-500">Name:</div>
      <div>{publication.ownerName}</div>
      <div className="font-bold text-purple-500">Email:</div>
      <div>{publication.owner}</div>
      <div className="font-bold text-purple-500">Telephone:</div>
      <div>{publication.contact}</div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={onClose} className='bg-violet-500'>
      Done
    </Button>
  </Modal.Footer>
    </Modal>
  );
};