import { useFetchDoc } from "hooks/useFetchDoc";
import CardImageADM from "./CardImageADM";

function ControlImagesSlide() {
  const { documents, loading, error } = useFetchDoc("produtos");

  const folderTypeSlide = documents?.filter((item) => item.folder === "slide");

  const imageGallery = folderTypeSlide?.map((produto) => (
    <CardImageADM produto={produto} key={produto.id} />
  ));

  if (loading)
    return (
      <h2
        style={{
          color: "red",
          textAlign: "center",
          margin: "20px",
        }}
      >
        Carregando
      </h2>
    );

  return (
    <>
      {error ? (
        error.message
      ) : (
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            margin: "10px auto",
            border: "1px solid black",
            padding: "15px",
            gap: "8px",
          }}
        >
          {imageGallery}
        </div>
      )}
    </>
  );
}

export default ControlImagesSlide;
