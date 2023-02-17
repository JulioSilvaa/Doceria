/* eslint-disable no-sparse-arrays */

import CardIMage from "components/cardImage/CardIMage";
import Container from "styles/Container";
import * as S from "./style";
const Home = () => {
  return (
    <>
      <S.ContainerHomePageHero />
      <Container>
        <S.title>Conheça nossos produtos</S.title>
        <CardIMage />
      </Container>
    </>
  );
};

export default Home;
