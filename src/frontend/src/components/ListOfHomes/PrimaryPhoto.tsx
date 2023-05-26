import { StorageReference, getDownloadURL, listAll, ref } from "firebase/storage";
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
            <div className="bg-gray-100">
                <img className="object-contain h-48 w-96 ..." src={"./loading.gif"} alt={"asdasd"} />
            </div>
        )
    }
    
  return (
    <div className="bg-gray-100 rounded-lg">
        <img className="object-contain h-48 w-96 ..." src={primaryPhoto.url} alt={"asdasd"} />
    </div>
  )
}
