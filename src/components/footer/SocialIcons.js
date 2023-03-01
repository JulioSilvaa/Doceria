import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { StyledSocialIcons } from "./StyleSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://m.facebook.com/lilydoceatelie/">
          <FaFacebookF size={25} />
        </a>
        <a href="https://www.instagram.com/lily.doce/">
          <FaInstagram size={25} />
        </a>
        <a href="https://www.ifood.com.br/delivery/ibate-sp/lily-doce-jd-das-palmeiras-2/a3b2315c-079d-491f-a257-34ecf75349c2">
          <SiIfood size={25} />
        </a>
        <a href="https://wa.link/dlp0lc">
          <FaWhatsapp size={27} />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
