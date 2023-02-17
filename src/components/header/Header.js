import logo from "assets/logo.jpeg";

import * as S from "./style";

function Header() {
  return (
    <S.ContainerHeaderItems>
      <S.Header>
        <S.Image src={logo} alt="" />
        <h1>
          <b> Lily Docê</b>
          <span> sua vida mais doce</span>
        </h1>
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
