import AboutUs from "components/about/AboutUs";
import CardIMage from "components/cardImage/CardIMage";
import Footer from "components/footer/Footer";
import SwiperComponent from "components/swiper/SwiperComponent";
import { ButtonOrderBy } from "styles/ButtonOrderby";
import Container from "styles/Container";
import ContainerGridImages from "styles/Containergrid";
import * as S from "./style";
const Home = () => {
  return (
    <>
      <S.ContainerHomePageHero />
      <Container>
        <S.title>Novidades da Semana</S.title>
        <SwiperComponent />
        <S.title>Conheça nossas sobremesas</S.title>
        <ContainerGridImages>
          <CardIMage />
        </ContainerGridImages>
        <S.ContainerButtonOrderBy>
          <ButtonOrderBy>Faça seu Pedido !</ButtonOrderBy>
        </S.ContainerButtonOrderBy>
        <S.ContainerAboutUs>
          <S.title>Nossa História</S.title>
          <AboutUs />
        </S.ContainerAboutUs>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
