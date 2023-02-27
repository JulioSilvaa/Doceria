import useDeleteProduct from "hooks/useDeleteProduct";
import * as S from "./styled";

function CardImageADM({ produto }) {
  const { deleteProduct } = useDeleteProduct("produtos");

  return (
    <S.CardImageAdm key={produto.id}>
      <h3> {produto.name}</h3>
      <img src={produto.image} alt={produto.name} />
      <p> Valor: {produto.price}</p>
      <button onClick={() => deleteProduct(produto.id)}>Excluir</button>
    </S.CardImageAdm>
  );
}

export default CardImageADM;
