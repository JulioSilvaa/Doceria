import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { StyledSocialIcons } from "./StyleSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaFacebook size={25} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/lily.doce/">
          <FaInstagram size={25} />
        </a>
      </li>
      <li>
        <a href="https://www.ifood.com.br/delivery/ibate-sp/lily-doce-jd-das-palmeiras-2/a3b2315c-079d-491f-a257-34ecf75349c2">
          <SiIfood size={25} />
        </a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=5516996225376&text=%20Lily%20Doc%C3%AA">
          <FaWhatsapp size={27} />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
