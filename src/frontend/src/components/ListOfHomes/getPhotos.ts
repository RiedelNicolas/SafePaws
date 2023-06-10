import { StorageReference, getDownloadURL, listAll, ref } from "firebase/storage";
import { FirebaseStorage } from "../../firebase/config";

type ImageInfo = {
  ref: StorageReference;
  url: string
}

const fetchImages = async (path: string) => {
  const storageRef = ref(FirebaseStorage, path);
  return await Promise.all(
    (await listAll(storageRef)).items
  );
}

export const getPhotos = async (path: string) => {
  const ImgRefs = await fetchImages(path);
  const imageInfo = await Promise.all(ImgRefs.map(async (ref): Promise<ImageInfo> => {
    return {
      ref: ref,
      url: await getDownloadURL(ref)
    }
  }))
  return imageInfo.map(x => x.url);
}
