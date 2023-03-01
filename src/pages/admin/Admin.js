import { yupResolver } from "@hookform/resolvers/yup";
import ControlImage from "components/controlImage/ControlImageGallery";
import ControlImagesSlide from "components/controlImage/ControlImagesSlide";
import { useInsertProducts } from "hooks/useInsertProduct";
import { useForm } from "react-hook-form";
import UploadImage from "services/insertPhotos";
import { schemaProduct } from "utils/validation";

import * as S from "./styled";

function Admin() {
  const { insertProducts } = useInsertProducts("produtos");

  const {
    register,
    reset,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProduct),
  });

  const [
    handleFileUpload,
    imgURL,
    progressValue,
    setFolder,
    folder,
    setImgURL,
    setProgress,
    loading,
  ] = UploadImage();

  const handleSubmitForm = (data) => {
    insertProducts({
      ...data,
      // uid: user.uid,
      // createdBy: user.displayName,
      image: imgURL,
      folder: folder,
    });

    setFolder("");
    setImgURL("");
    setProgress("");
    reset();
  };

  return (
    <>
      <S.Title>Painel do Administrador</S.Title>
      <S.FormControlImage onSubmit={onSubmit(handleSubmitForm)}>
        <label>
          Nome do produto
          <input type="text" {...register("name", { required: true })} />
          {errors.name ? (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          ) : (
            <span>ex: Nome do produto</span>
          )}
        </label>
        <label>
          Descrição do produto
          <input type="text" {...register("description", { required: true })} />
          {errors.description ? (
            <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>
          ) : (
            <span>ex: Pequena descrição do produto</span>
          )}
        </label>
        <label>
          Valor do produto
          <input
            type="text"
            {...register("price", {
              required: true,
            })}
          />
          {errors.price ? (
            <S.ErrorMessage>{errors.price.message}</S.ErrorMessage>
          ) : (
            <span>ex: 200.90 use ponto para centavos</span>
          )}
        </label>
        <label>
          Onde o produto será adicionado
          <S.ContainerCheckBox>
            <select
              required
              onChange={(e) => {
                setFolder(e.target.value);
              }}
            >
              <option value="0">Selecione uma opção:</option>
              <option value="galeria">Galeria de Imagens</option>
              <option value="slide">Carrossel de Novidades</option>
            </select>
          </S.ContainerCheckBox>
          <span>ex: Selecione uma opção, onde o item será adicionado.</span>
        </label>
        <label>
          Selecione a Imagem
          {!imgURL && <progress value={progressValue} max="100" />}
          {imgURL && (
            <img
              style={{
                width: "40%",
                padding: "10px",
                textAlign: "center",
              }}
              src={imgURL}
              alt=""
            />
          )}
          <input
            required
            type="file"
            accept=".png,.jpg,.jpeg,"
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
        </label>
        {!loading && <S.ButtonSendForm type="submit">ENVIAR</S.ButtonSendForm>}
        {loading && <S.ButtonSendForm disabled>AGUARDE...</S.ButtonSendForm>}
        <span>OBS: utilize somente imagens no formato png ou jpeg</span>
      </S.FormControlImage>
      <div>
        <S.SubTitleSection>Fotos da galeria</S.SubTitleSection>
        <ControlImage />
        <S.SubTitleSection>Fotos do Slide</S.SubTitleSection>
        <ControlImagesSlide />
      </div>
    </>
  );
}

export default Admin;
