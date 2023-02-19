import styled from "styled-components";

export const ContainerHeaderItems = styled.div`
  background-color: #f8e0de;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  h1 {
    font-size: 3.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: end;
    font-weight: normal;
    color: #231f20;
  }

  span {
    font-size: 1.2rem;
    margin-left: 3.125rem;
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 10%;
  width: 6.25rem;
  display: block;
  border-radius: 50%;
  object-fit: scale-down;
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3rem;
  font-weight: bold;
  list-style: none;

  li + li {
    margin: 0 8px;
  }

  li {
    width: 100px;
    display: block;
    height: 30px;
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    &:hover {
      background-color: #c2e2ed;
      border-radius: 8px;
    }
  }
`;
