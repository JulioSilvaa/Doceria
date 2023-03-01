import AboutUs from "components/about/AboutUs";
import CardIMage from "components/cardImage/CardIMage";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import SwiperComponent from "components/swiper/SwiperComponent";
import { ButtonOrderBy } from "styles/ButtonOrderby";
import Container from "styles/Container";
import * as S from "./style";
const Home = () => {
  return (
    <>
      <Header />
      <S.ContainerHomePageHero />
      <Container>
        <S.title>Novidades da Semana</S.title>
        <SwiperComponent />
        <S.title>Conheça nossas sobremesas</S.title>
        <CardIMage />
        <S.ContainerButtonOrderBy>
          <ButtonOrderBy>
            <a href="https://wa.link/dlp0lc">Faça seu Pedido !</a>
          </ButtonOrderBy>
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
