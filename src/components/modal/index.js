import * as S from "./style";

const Modal = ({ isOpen, isClose, children, id: modal }) => {
  if (!isOpen) return null;
  const handleOutsideClick = (e) => {
    if (e.target.id !== modal) isClose(false);
  };
  return (
    <S.ContainerModal id={modal} onClick={handleOutsideClick}>
      <S.Container>
        <button className="CloseModal" onClick={isClose} />
        <div className="Content">{children} </div>
      </S.Container>
    </S.ContainerModal>
  );
};

export default Modal;
