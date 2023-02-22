import { getDownloadURL, listAll, ref } from "firebase/storage";
import storage from "../firebase/firebaseConfig";

export const getAllPhotos = async () => {
  let list = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};
