import logo from "assets/logo.jpeg";

import * as S from "./style";

function Header() {
  return (
    <S.ContainerHeaderItems>
      <S.Header>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            width: "55%",
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
        <S.Nav>
          <li>Produtos</li>
          <li>Contato</li>
          <li>WhattsApp</li>
        </S.Nav>
      </S.Header>
    </S.ContainerHeaderItems>
  );
}

export default Header;
