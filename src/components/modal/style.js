import styled from "styled-components";

export const ContainerModal = styled.div`
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  position: fixed;
  color: lightblue;
  top: 0;
  left: 0;
  z-index: 50;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;

  .CloseModal {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 25px);
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &::before,
    &::after {
      content: " ";
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #000;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
`;

export const Container = styled.div`
  background-color: #ffb6c1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
  width: 80vw;
  height: 20vh;
  border-radius: 20px;
  text-align: center;
`;
