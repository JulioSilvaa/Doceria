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
  height: 31.25rem;
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
    font-size: 1.2rem;
    margin-top: 0.25rem;
  }

  input[type="file"] {
    padding: 0;
    display: block;
    /* display: none; */
  }
`;

export const ContainerCheckBox = styled.div`
  select {
    font-size: 1.3rem;
    padding: 4px;
  }
`;
