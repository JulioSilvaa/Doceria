import { useFetchDoc } from "hooks/useFetchDoc";
import CardImageADM from "./CardImageADM";
import * as S from "./styled";

function ControlImagesSlide() {
  const { documents, loading, error } = useFetchDoc("produtos");

  const folderTypeSlide = documents?.filter((item) => item.folder === "slide");

  const imageGallery = folderTypeSlide?.map((produto) => (
    <CardImageADM produto={produto} key={produto.id} />
  ));

  if (loading) return <S.SubTitleLoading>Carregando</S.SubTitleLoading>;

  return (
    <>
      {error ? (
        error.message
      ) : (
        <S.ContainerCard>{imageGallery}</S.ContainerCard>
      )}
    </>
  );
}

export default ControlImagesSlide;
