import { useFetchDoc } from "hooks/useFetchDoc";
import ContainerGridImages from "styles/Containergrid";
import { SelectFolderImage } from "utils/selectFolderInDB";
import { ContainerImages } from "./style";

function CardIMage() {
  const { documents, loading } = useFetchDoc("produtos");

  const imagesInDb = SelectFolderImage(documents);

  const photos = imagesInDb?.map((item) => (
    <ContainerImages key={item.id}>
      <div>
        <img src={item.image} alt={item.name} />
        <div className="description">
          <b>{item.name}</b>
          <p>
            {item.description}
            <div className="price">
              {Number(item.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
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
      {photos <= 0 || photos === undefined ? (
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
