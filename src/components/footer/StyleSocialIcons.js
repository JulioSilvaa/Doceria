import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  a:nth-child(1):hover {
    color: #fff;
    background-color: blue;
    transform: scale(1.1);
  }
  a:nth-child(2):hover {
    color: #fff;
    background-color: #c6017b;
    transform: scale(1.1);
  }
  a:nth-child(3):hover {
    color: #fff;
    background-color: red;
    transform: scale(1.1);
  }
  a:nth-child(4):hover {
    color: #fff;
    background-color: green;
    transform: scale(1.1);
  }

  li {
    list-style: none;
  }

  a {
    border: 1px solid #000;
    border-radius: 50%;
    color: #000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    transform: scale(0.94);
    transform-origin: center center;
    transition: all 0.5s ease-out;
  }
`;
