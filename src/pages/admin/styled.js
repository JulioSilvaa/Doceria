import styled from "styled-components";

export const Title = styled.h1`
  background-color: #bde9d6;
  padding: 0.5rem;
  text-align: center;
  font-size: 3rem;
  margin: 0 auto;
`;

export const FormControlImage = styled.form`
  background-color: #f8e0de;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  height: 600px;
  margin: 3.125rem auto;
  padding: 3.125rem;
  font-size: 1.4rem;

  label {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }

  input {
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
    padding: 0;
    display: block;
    /* display: none; */
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
  width: 200px;
  height: 30px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background-color: lightseagreen;
`;
