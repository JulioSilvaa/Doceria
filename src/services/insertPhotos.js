import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/firebaseConfig";

function UploadImage() {
  const [imgURL, setImgURL] = useState("");
  const [progressValue, setProgress] = useState("");
  const [folder, setFolder] = useState("galeria");

  const handleFileUpload = (e) => {
    const file = e.target?.files[0];
    if (!file) return;

    if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const storageRef = ref(storage, `${folder}/${file.name}`);
      const uploadProcess = uploadBytesResumable(storageRef, file);

      uploadProcess.on(
        "state_changed",
        (snapshot) => {
          const progressValue = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressValue);
        },

        (error) => alert(error),
        () => {
          getDownloadURL(uploadProcess.snapshot.ref).then((url) => {
            setImgURL(url);
          });
        }
      );
    } else {
      throw new Error("O carregamento falhou, tipo de arquivo não");
    }
  };
  return [
    handleFileUpload,
    imgURL,
    progressValue,
    setFolder,
    folder,
    setImgURL,
    setProgress,
  ];
}

export default UploadImage;
