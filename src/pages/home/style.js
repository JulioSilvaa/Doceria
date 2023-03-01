import styled from "styled-components";

export const ContainerHomePageHero = styled.section`
  background-image: url("https://static-images.ifood.com.br/image/upload//capa/a3b2315c-079d-491f-a257-34ecf75349c2/202203281319_bgRT_i@2x.jpg");
  background-repeat: no-repeat;
  background-position: right 12% bottom 30%;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 60px;

  @media (max-width: 770px) {
    height: 350px;
  }
  @media (max-width: 570px) {
    height: 250px;
  }

  @media (max-width: 390px) {
    height: 200px;
  }
  @media (max-width: 320px) {
    height: 150px;
  }
`;

export const ContainerGridImages = styled.main`
  display: grid;
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
