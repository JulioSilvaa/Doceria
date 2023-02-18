import styled from "styled-components";
import banner from "../../assets/cupcakes.avif";

export const ContainerHomePageHero = styled.div`
  background: url(${banner}) center bottom no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 700px;
  margin-bottom: 60px;
`;

export const ContainerGridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

export const title = styled.h1`
  position: relative;
  text-align: center;
  margin: 50px 0 10px 0;
  font-family: "Dancing Script", sans-serif;
`;
