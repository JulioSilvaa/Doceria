import styled from "styled-components";

export const ContainerImages = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;

  span {
    display: none;
    position: absolute;
  }

  :hover {
    span {
      display: block;
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all ease 0.5s;
    cursor: pointer;
    max-width: 100%;
    max-height: 100%;
    transform: scale(0.94);
    transform-origin: center center;
    &:hover {
      transform: scale(0.98);
    }

    @media (max-width: 570px) {
      height: 150px;
    }

    @media (max-width: 390px) {
      height: 100px;
    }
  }
  .description {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.5s;
    text-align: center;
    font-size: 1.2rem;
  }
  &:hover .description {
    opacity: 1;
  }

  .price {
    font-size: 1rem;
    padding-top: 8px;
  }
`;
