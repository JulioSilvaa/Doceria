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
        <a href="https://facebook.com">
          <FaInstagram size={25} />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <SiIfood size={25} />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaWhatsapp size={27} />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
