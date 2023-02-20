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

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    h1 {
      padding-bottom: 20px;
    }
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      padding-bottom: 20px 0 0 20px;
      /* margin: 0 0 20px auto; */
    }
  }

  @media (max-width: 360px) {
    h1 {
      padding-bottom: 20px;
      font-size: 3rem;
    }
  }
`;

export const Image = styled.img`
  max-width: 10%;
  width: 6.25rem;
  display: block;
  border-radius: 50%;
  object-fit: scale-down;

  @media (max-width: 800px) {
    max-width: 90px;
    padding-bottom: 20px;
  }

  @media (max-width: 570px) {
    max-width: 90px;
    padding-bottom: 20px;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    display: none;
  }
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
    transform: scale(1);
    transition: all 0.3s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
