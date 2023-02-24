import { useFetchDoc } from "hooks/useFetchDoc";

function ControlImage() {
  const { documents, loading, error } = useFetchDoc("produtos");

  //verificar qual o tipo de folder que contem no objeto e após isso separar por seção

  const imageGallery = documents?.map((produto) => (
    <div
      key={produto.id}
      style={{
        width: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        cursor: "pointer",
      }}
    >
      <h3>Nome: {produto.name}</h3>
      <img
        style={{
          width: "150px",
          display: "block",
        }}
        src={produto.image}
        alt={produto.name}
      />
      <p> Valor: {produto.price}</p>
      <button>Excluir</button>
    </div>
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

export default ControlImage;
