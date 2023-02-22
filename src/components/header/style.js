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
    }
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      padding-bottom: 20px 0 0 20px;
    }
  }

  @media (max-width: 390px) {
    h1 {
      padding-bottom: 20px;
      font-size: 3rem;
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
