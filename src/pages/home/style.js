import styled from "styled-components";
import banner from "../../assets/cupcakes.avif";

export const ContainerHomePageHero = styled.section`
  background: url(${banner}) center bottom no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 60px;
`;

export const ContainerGridImages = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

export const title = styled.h1`
  position: relative;
  text-align: center;
  margin: 50px auto;
  font-family: "Dancing Script", sans-serif;
`;

export const ContainerButtonOrderBy = styled.section`
  margin: 40px auto 60px auto;
  text-align: center;
  height: 3.75rem;
`;

export const ContainerAboutUs = styled.section`
  max-width: 100%;

  p {
    font-size: 1.5rem;
  }
`;

export const containerFooter = styled.footer`
  max-width: 100%;
  background-color: #f8e0de;
`;
