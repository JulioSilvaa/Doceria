import logo from "assets/logo.jpeg";
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

            width: "53%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <S.Image src={logo} alt="" />
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
