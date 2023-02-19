import CardIMage from "components/cardImage/CardIMage";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";

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

          <p>
            A prática cotidiana prova que o surgimento do comércio virtual
            possibilita uma melhor visão global de alternativas às soluções
            ortodoxas. É importante questionar o quanto a crescente influência
            da mídia promove a alavancagem das diversas correntes de pensamento.
            Todavia, o início da atividade geral de formação de atitudes
            maximiza as possibilidades por conta das direções preferenciais no
            sentido do progresso. É claro que o desenvolvimento contínuo de
            distintas formas de atuação faz parte de um processo de
            gerenciamento das regras de conduta normativas. Por conseguinte, a
            consolidação das estruturas cumpre um papel essencial na formulação
            das condições financeiras e administrativas exigidas. sentido do
            progresso. É claro que o desenvolvimento contínuo de distintas
            formas de atuação faz parte de um processo de gerenciamento das
            regras de conduta normativas. Por conseguinte, a consolidação das
            estruturas cumpre um papel essencial na formulação das condições
            financeiras e administrativas exigidas. sentido do progresso. É
            claro que o desenvolvimento contínuo de distintas formas de atuação
            faz parte de um processo de gerenciamento das regras de conduta
            normativas. Por conseguinte, a consolidação das estruturas cumpre um
            papel essencial na formulação das condições financeiras e
            administrativas exigidas.
          </p>
        </S.ContainerAboutUs>
      </Container>
      <S.containerFooter>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <ul>
              <li>
                <span>
                  <FaInstagram />
                </span>
              </li>
              <li>
                <span>
                  <FaFacebook />
                </span>
              </li>
              <li>
                <span>
                  <SiIfood />
                </span>
              </li>
            </ul>
            &copy; 2023 - Lily Docês - todos os direitos reservados
          </div>
        </div>
      </S.containerFooter>
    </>
  );
};

export default Home;
