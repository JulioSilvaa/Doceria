import styled from "styled-components";

export const ContainerHeaderItems = styled.div`
  background-color: #c2e2ed;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  h1 {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: end;
    font-weight: normal;
    color: #231f20;
  }

  /* h1 span::before {
    content: "";
    border-color: #a3e2ca;
    border-style: solid;
    border-width: 0 3em 0 0.6em;
    margin-right: 4px;
  } */

  span {
    font-size: 1.1rem;
    margin-left: 3.125rem;
  }
`;

export const Image = styled.img`
  max-width: 5%;
  width: 6.25rem;
  display: block;
  border-radius: 50%;
  object-fit: scale-down;
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  list-style: none;

  li + li {
    margin: 0 12px;
  }

  li {
    width: 100px;
    display: block;
    height: 30px;
    padding: 8;
    text-align: center;
    cursor: pointer;

    &:hover {
      border-bottom: solid 1px #000;
      /* color: #a3e2ca; */
    }
  }
`;
