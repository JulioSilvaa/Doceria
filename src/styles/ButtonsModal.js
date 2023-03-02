import styled from "styled-components";

export const ContainerButtonsModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

export const ButtonConfirm = styled.button`
  width: 20%;
  height: 30px;
  max-width: 200px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #000;

  &:hover {
    background-color: lightcyan;
  }
`;
export const ButtonNotConfirm = styled.button`
  width: 20%;
  height: 30px;
  max-width: 200px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #000;
  &:hover {
    background-color: lightcyan;
  }
`;
