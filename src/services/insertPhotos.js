import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { storage } from "../firebase/firebaseConfig";

function UploadImage() {
  const [imgURL, setImgURL] = useState("");
  const [progressValue, setProgress] = useState("");
  const [folder, setFolder] = useState("galeria");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target?.files[0];
    if (!file) return;
    setLoading(true);

    if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      toast.info("Aguarde carregar a imagem");
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
            setLoading(false);
          });
        }
      );
    } else {
      toast.error("O carregamento falhou, tipo de arquivo não");
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
    loading,
  ];
}

export default UploadImage;
