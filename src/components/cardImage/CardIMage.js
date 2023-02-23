import { useEffect, useState } from "react";
import * as Foto from "services/getAllPhotos";
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

  return (
    <>
      {loading ? (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <h4>Carregando ...</h4>
        </div>
      ) : (
        photos
      )}
    </>
  );
}

export default CardIMage;
