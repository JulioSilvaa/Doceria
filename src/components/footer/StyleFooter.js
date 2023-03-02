import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 30px;
  max-width: 100%;
  background-color: #f8e0de;
  font-size: 1.2rem;
  color: #000;
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: flex-start;
  align-items: center;

  img {
    max-width: 6.375rem;
    border-radius: 50%;

    @media (max-width: 800px) {
      max-width: 5.375rem;
    }
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 12px 12px;

  h2 {
    margin-left: 8px;
  }
`;

export const InfoSocialMidia = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2 {
    margin-bottom: 12px;
  }

  @media (max-width: 970px) {
    margin: 20px auto;
    align-items: center;
    text-align: center;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  span {
    padding: 4px;
  }

  @media (max-width: 900px) {
    margin: 10px auto;
    align-items: center;
    text-align: center;
  }
`;

export const Copy = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 1.5rem;
  background-color: #f8e0de;
`;
