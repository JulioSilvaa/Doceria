import styled from "styled-components";

export const Title = styled.h1`
  padding: 0.5rem;
  text-align: center;
  font-size: 3rem;
  margin: 0 auto;

  @media (max-width: 390px) {
    font-size: 1.2rem;
  }
`;

export const ContainerHeaderAdmin = styled.div`
  background-color: #bde9d6;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  width: 12.5rem;
  display: flex;
  padding: 0 8px;
  justify-content: space-between;

  @media (max-width: 390px) {
    margin: 0 auto;
    padding-bottom: 8px;
  }
`;

export const ButtonLogout = styled.button`
  max-width: 200px;
  height: 30px;
  background-color: #cf0e0e;
  color: #fff;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 300;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
export const ButtonHome = styled.button`
  max-width: 200px;
  height: 30px;
  background-color: #0000ff;
  color: #fff;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 300;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormControlImage = styled.form`
  background-color: #f8e0de;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  margin: 3.125rem auto;
  padding: 3.125rem;
  font-size: 1.4rem;

  label {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  input {
    color: #000;
    height: 30px;
    caret-color: green;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 0.25rem;
    font-family: sans-serif;
    :focus {
      outline: none;
    }
  }

  input[type="file"] {
    color: #000;
    padding: 0;
    display: block;
    /* display: none; */
  }

  span {
    font-size: 0.8rem;
    font-family: sans-serif;
    color: #000123;
  }
`;

export const ContainerDownloadImage = styled.div`
  cursor: pointer;
  max-width: 100%;
  height: 90px;
  text-align: center;
`;

export const ContainerCheckBox = styled.div`
  select {
    font-size: 1.3rem;
    padding: 4px;
  }
`;

export const ButtonSendForm = styled.button`
  color: #000;
  max-width: 200px;
  width: 200px;
  height: 40px;
  font-size: 1em;
  font-family: sans-serif;
  padding: 8px 12px;
  margin: 30px auto;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background-color: #bde9d6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform-style: preserve-3d;
  transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:active {
    position: relative;
    transform: translate(0, 0.5em);
    top: 5px;
    &:hover {
      box-shadow: none;
      transform: translate(0, 0.25em);
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-family: sans-serif;
  color: #bf1650;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const SubTitleSection = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;
