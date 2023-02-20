import styled from "styled-components";
import banner from "../../assets/bolinhooss.png";

export const ContainerHomePageHero = styled.section`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right 12% bottom 30%;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 400px;
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
