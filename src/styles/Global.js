import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Dancing Script', sans-serif; */
}

body{
  width: 100%;
  font-family: 'Dancing Script', sans-serif;

}

.swiper {
  width: 100%;
  height: 500px;
}
.swiper-slide {
  margin-top: 20px;
  background-position: bottom ;
  background-size: cover;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 390px) {
     .swiper{
      height: 200px;
     }
  }


`;
export default GlobalStyle;
