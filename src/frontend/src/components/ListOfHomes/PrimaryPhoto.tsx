import { StorageReference, deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../../firebase/config";
import { useEffect, useState } from "react";

interface Props {
    email: string;
}

type ImageInfo = {
    ref: StorageReference;
    url: string
  }


export const PrimaryPhoto = ({email} : Props) => {

    const [primaryPhoto, setPrimaryPhoto] = useState<ImageInfo>();


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
          console.log(imagesInfo);
        setPrimaryPhoto(imagesInfo[0]);
    }
    
    useEffect(() => {
        loadImages();
      }, []);
   
    if(!primaryPhoto) {
        return (
            <img 
             src="https://fastly.picsum.photos/id/732/200/300.jpg?hmac=mBueuWVJ8LlL-R7Yt9w1ONAFVayQPH5DzVSO-lPyI9w"
             alt="PrimaryPhoto"
             className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        )
    }
    
  return (
    <div className="h-300 w-400 bg-gray-200 flex items-center justify-center">
        <img
            src={primaryPhoto.url}
            alt={"z<sdsd"}
            className="max-h-full max-w-full object-cover object-center"
            />
  </div>
  )
}
