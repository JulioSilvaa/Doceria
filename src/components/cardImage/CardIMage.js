import ContainerGridImages from "styles/Containergrid";
import bolo1 from "../../assets/blbrigadeiro.jpeg";
import ContainerImages from "./style";

function CardIMage() {
  return (
    <ContainerImages>
      <ContainerGridImages>
        <div>
          <img src={bolo1} alt="" />
          <span>Bolo de chocolate</span>
        </div>
        <img src={bolo1} alt="" />
        <img src={bolo1} alt="" />
        <img src={bolo1} alt="" />
        <img src={bolo1} alt="" />
        <img src={bolo1} alt="" />
        <img src={bolo1} alt="" />
      </ContainerGridImages>
    </ContainerImages>
  );
}

export default CardIMage;
