import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  border: 1px solid #ccc;
  padding: 15px;
  gap: 8px;
`;

export const SubTitleLoading = styled.h2`
  color: #ff0000;
  text-align: center;
  margin: 20px;
`;

export const CardImageAdm = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 8px;
  background-color: #f8f8ff;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    font-family: sans-serif;
  }

  img {
    margin: 8px auto;
    max-width: 150px;
    height: 100px;
    display: block;
  }

  p {
    font-size: 0.9rem;
    font-family: sans-serif;
  }

  button {
    width: 100%;
    height: 30px;
    font-family: sans-serif;
    margin: 8px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;
