import Modal from "components/modal";
import useDeleteProduct from "hooks/useDeleteProduct";
import { useState } from "react";
import {
  ButtonConfirm,
  ButtonNotConfirm,
  ContainerButtonsModal,
} from "styles/ButtonsModal";
import * as S from "./styled";

function CardImageADM({ produto }) {
  const { deleteProduct } = useDeleteProduct("produtos");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal isOpen={modalOpen} isClose={setModalOpen}>
        <h4>Deseja remover o produto da lista ?</h4>
        <ContainerButtonsModal>
          <ButtonConfirm onClick={() => deleteProduct(produto.id)}>
            Sim
          </ButtonConfirm>
          <ButtonNotConfirm>Não</ButtonNotConfirm>
        </ContainerButtonsModal>
      </Modal>
      <S.CardImageAdm key={produto.id}>
        <h3> {produto.name}</h3>
        <img src={produto.image} alt={produto.name} />
        <p> Valor: {produto.price}</p>
        <button onClick={() => setModalOpen(true)}>Excluir</button>
      </S.CardImageAdm>
    </>
  );
}

export default CardImageADM;
