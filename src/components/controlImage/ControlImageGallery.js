import { useFetchDoc } from "hooks/useFetchDoc";
import { SelectFolderImage } from "utils/selectFolderInDB";
import CardImageADM from "./CardImageADM";
import * as S from "./styled";

function ControlImage() {
  const { documents, loading, error } = useFetchDoc("produtos");

  const folderTypeGallery = SelectFolderImage(documents);

  const imageGallerySlide = folderTypeGallery?.map((produto) => (
    <CardImageADM produto={produto} key={produto.id} />
  ));

  if (loading) return <S.SubTitleLoading>Carregando</S.SubTitleLoading>;

  return (
    <>
      {error ? (
        error.message
      ) : (
        <S.ContainerCard>{imageGallerySlide}</S.ContainerCard>
      )}
    </>
  );
}

export default ControlImage;
