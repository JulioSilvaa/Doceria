import logo from "assets/logo.webp";
import SocialIcons from "components/footer/SocialIcons";

import * as S from "./style";

function Header() {
  return (
    <S.ContainerHeaderItems>
      <S.Header>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <S.Image src={logo} alt="Logo da empresa" />
          <h1>
            <b> Lily Docê</b>
            <span> sua vida mais doce</span>
          </h1>
        </div>

        <SocialIcons />
      </S.Header>
    </S.ContainerHeaderItems>
  );
}

export default Header;
