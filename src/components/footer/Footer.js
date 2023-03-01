import logo from "assets/logo.webp";
import * as S from "components/footer/StyleFooter";
import { GrLocation, GrPhone } from "react-icons/gr";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <>
      <S.StyledFooter>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <S.Address>
          <S.InfoFooter>
            <GrLocation size={25} />
            <h2>Localização</h2>
          </S.InfoFooter>
          <span>
            <b>Rua: </b> Rua: Eva Aparecida da Silva Tavares, 50 - Jd das
            Palmeiras 2
          </span>
          <span>
            <b>Cidade: </b> Ibaté - SP
          </span>
          <span>CEP: 14815-000</span>
        </S.Address>
        <S.Address>
          <ul>
            <S.InfoFooter>
              <GrPhone size={25} />
              <h2>Contato</h2>
            </S.InfoFooter>
            <li>
              <b>Telefone: </b> +55 16 99645-6004
            </li>
            <li>
              <b>email: </b> example@dadadad.com
            </li>
          </ul>
        </S.Address>
        <S.InfoSocialMidia>
          <h2>Siga nossas redes sociais</h2>
          <SocialIcons />
        </S.InfoSocialMidia>
      </S.StyledFooter>
      <S.Copy>&copy; 2023 Lily Docê. Todos os direitos reservados</S.Copy>
    </>
  );
}

export default Footer;
