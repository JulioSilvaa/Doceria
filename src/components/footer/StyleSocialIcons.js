import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;

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
    &:hover {
      transform: scale(1.1);
    }
  }
`;
