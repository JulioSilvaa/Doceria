import useDeleteProduct from "hooks/useDeleteProduct";

function CardImageADM({ produto }) {
  const { deleteProduct } = useDeleteProduct("produtos");

  return (
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
      <button onClick={() => deleteProduct(produto.id)}>Excluir</button>
    </div>
  );
}

export default CardImageADM;
