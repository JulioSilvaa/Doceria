import CardIMage from "components/cardImage/CardIMage";

import SwiperComponent from "components/swiper/SwiperComponent";
import Container from "styles/Container";
import ContainerGridImages from "styles/Containergrid";
import * as S from "./style";
const Home = () => {
  return (
    <>
      <S.ContainerHomePageHero />
      <Container>
        <S.title>Novidades</S.title>
        <SwiperComponent />
        <S.title>Conheça nossos produtos</S.title>
        <ContainerGridImages>
          <CardIMage />
        </ContainerGridImages>
      </Container>
    </>
  );
};

export default Home;
