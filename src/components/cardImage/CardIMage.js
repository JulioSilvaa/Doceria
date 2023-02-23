import { useEffect, useState } from "react";
import * as Foto from "services/getAllPhotos";
import ContainerGridImages from "styles/Containergrid";
import { ContainerImages } from "./style";

function CardIMage() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const getFotos = async () => {
    setLoading(true);
    setImages(await Foto.getAllPhotosInGaleria());
    setLoading(false);
  };

  useEffect(() => {
    getFotos();

    return () => {
      console.log("Loading");
    };
  }, []);

  const photos = images?.map((item) => (
    <ContainerImages key={item.name}>
      <div>
        <img src={item.url} alt={item.name} />
        <div className="description">
          <b>{item.name}</b>
          <p>
            {item.description} - {item.valor}
          </p>
        </div>
      </div>
    </ContainerImages>
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
      {photos.length <= 0 ? (
        <div
          style={{
            color: "red",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <h1>Sem imagens na Galeria</h1>
        </div>
      ) : (
        <ContainerGridImages>{photos}</ContainerGridImages>
      )}
    </>
  );
}

export default CardIMage;
