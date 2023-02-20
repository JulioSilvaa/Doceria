import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { StyledSocialIcons } from "./StyleSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <SiIfood />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaWhatsapp />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
