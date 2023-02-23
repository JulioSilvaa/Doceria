import useForm from "hooks/useForms";
import { useInsertProducts } from "hooks/useInsertProduct";
import UploadImage from "services/insertPhotos";
import * as S from "./styled";

function Admin() {
  const [
    handleFileUpload,
    imgURL,
    progressValue,
    setFolder,
    setImgURL,
    setProgress,
  ] = UploadImage();
  const { insertProducts } = useInsertProducts("produtos");

  const [form, onChange, clear] = useForm({
    name: "",
    price: "",
    description: "",
    image: imgURL,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    insertProducts({
      ...form,
      // uid: user.uid,
      // createdBy: user.displayName,
      image: imgURL,
    });

    clear();
    setImgURL("");
    setProgress("");
  };

  return (
    <>
      <S.Title>Painel do Administrador</S.Title>
      <S.FormControlImage onSubmit={handleSubmit}>
        <label>
          Nome do produto
          <input
            type="text"
            name={"name"}
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          Descrição do produto
          <input
            type="text"
            name={"description"}
            value={form.description}
            onChange={onChange}
          />
        </label>
        <label>
          Valor do produto
          <input
            type="number"
            name={"price"}
            value={form.price}
            onChange={onChange}
          />
        </label>
        <label>
          Onde o produto será adicionado
          <S.ContainerCheckBox>
            <select
              onChange={(e) => {
                setFolder(e.target.value);
              }}
              name={"folder"}
            >
              <option value="0">Selecione uma opção:</option>
              <option value="galeria">Galeria de Imagens</option>
              <option value="slide">Carrossel de Novidades</option>
            </select>
          </S.ContainerCheckBox>
        </label>
        <label>
          Selecione a Imagem
          {!imgURL && <progress value={progressValue} max="100" />}
          {imgURL && (
            <img
              style={{
                width: "30%",
                padding: "10px",
                textAlign: "center",
              }}
              src={imgURL}
              alt=""
            />
          )}
          <input
            type="file"
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
        </label>

        <S.ButtonSendForm type="submit">ENVIAR</S.ButtonSendForm>
      </S.FormControlImage>
    </>
  );
}

export default Admin;
