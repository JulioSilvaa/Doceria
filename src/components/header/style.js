import styled from "styled-components";

export const ContainerHeaderItems = styled.div`
  background-color: #bde9d6;
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
    font-size: 1.3rem;
    margin-left: 3.125rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    h1 {
      padding-bottom: 20px;
      margin: 0 auto;
    }
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      padding-bottom: 20px 0 0 20px;
    }
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 390px) {
    h1 {
      padding-bottom: 20px;
      font-size: 3rem;
      margin: 0 auto;
    }
  }

  @media (max-width: 320px) {
    h1 {
      padding-bottom: 20px;
      font-size: 2rem;
    }
    span {
      font-size: 0.9rem;
    }
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 800px) {
    max-width: 90px;
    padding-bottom: 20px;
    display: none;
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
