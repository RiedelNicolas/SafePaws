import { StorageReference, deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../firebase/config";
import { useAppSelector } from "../store/hook";
import { useEffect, useState } from "react";

type ImageInfo = {
  ref: StorageReference;
  url: string
}
export const PhotosUploader = () => {

  const { email } = useAppSelector((state) => state.auth);
  const [addedPhotos, setAddedPhotos] = useState<ImageInfo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    const storageRef = ref(FirebaseStorage, email!);
    return await Promise.all(
      (await listAll(storageRef)).items
    );
  }

  const loadImages = async () => {
    const ImgRefs = await fetchImages();
    const imagesInfo = await Promise.all(ImgRefs.map(async (ref): Promise<ImageInfo> => {
      return {
        ref: ref,
        url: await getDownloadURL(ref)
      }
    }))
    setLoading(false);
    setAddedPhotos(imagesInfo);
  }

  const uploadPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {

    setLoading(true);
    event.preventDefault();

    // Add Firebase logic
    await Promise.all(Array.from(event.target.files!).map(async file => {
      const storageRef = ref(FirebaseStorage, email + "/" + Math.random().toString());
      await uploadBytes(storageRef, file).then(() => {
        console.log('Uploaded a blob or file!');
      });
    }));
    loadImages();
  }

  useEffect(() => {
    loadImages();
  }, []);

  const removePhoto = async (event: React.MouseEvent<HTMLButtonElement>, image: ImageInfo) => {
    event.preventDefault();
    await deleteObject(image.ref);
    loadImages();
  }


  if(loading){
    return (
          <>
    <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {addedPhotos.length > 0 && addedPhotos.map((photo: ImageInfo) => (
        <div className="h-32 flex relative" key={photo.url}>
          <img className="rounded-2xl w-full object-cover" src={photo.url} alt="" />
          <button onClick={event => removePhoto(event, photo)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      ))}
      <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
        <input type="file" multiple className="hidden" onChange={uploadPhoto} />
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          Loading
      </label>
    </div>
  </>
    )
  }

  return (
    <>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 && addedPhotos.map((photo: ImageInfo) => (
          <div className="h-32 flex relative" key={photo.url}>
            <img className="rounded-2xl w-full object-cover" src={photo.url} alt="" />
            <button onClick={event => removePhoto(event, photo)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        ))}
        <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input type="file" multiple className="hidden" onChange={uploadPhoto} />
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
            Upload
        </label>
      </div>
    </>
  );
}