import styled from "styled-components";
import banner from "../../assets/cupcakes.avif";

export const ContainerHomePageHero = styled.div`
  background: url(${banner}) center bottom no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 56.25rem;
`;

export const ContainerGridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

export const title = styled.h1`
  text-align: center;
  margin: 30px auto;
`;
