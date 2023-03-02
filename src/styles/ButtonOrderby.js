import styled from "styled-components";

export const ButtonOrderBy = styled.button`
  font-family: "Dancing Script", sans-serif;
  color: #000;
  width: 17.75rem;
  max-width: 18.75rem;
  height: 3.75rem;
  border: none;
  border-radius: 10px;
  padding: 0.625rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: #bde9d6;
  cursor: pointer;
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

  a {
    text-decoration: none;
    color: #000;
  }
`;
