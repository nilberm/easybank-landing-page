import { InviteBtn } from "../Elements";
import {
  BtnAndCopyrights,
  Copyright,
  FooterContainer,
  Logo,
  LogosContainer,
  NavContainer,
  NavLink,
  SocialIcons,
} from "./styled";

import iconFacebook from "../../assets/icons/icon-facebook.svg";
import iconInstagram from "../../assets/icons/icon-instagram.svg";
import iconPinterest from "../../assets/icons/icon-pinterest.svg";
import iconTwitter from "../../assets/icons/icon-twitter.svg";
import iconYoutube from "../../assets/icons/icon-youtube.svg";
import LogoIcon from "../Svg/Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <LogosContainer>
        <Logo>
          <LogoIcon />
        </Logo>
        <SocialIcons>
          <img src={iconFacebook} alt="" />
          <img src={iconYoutube} alt="" />
          <img src={iconTwitter} alt="" />
          <img src={iconPinterest} alt="" />
          <img src={iconInstagram} alt="" />
        </SocialIcons>
      </LogosContainer>

      <NavContainer>
        <NavLink to="/" activeStyled>
          About
        </NavLink>
        <NavLink to="/" activeStyled>
          Contact
        </NavLink>
        <NavLink to="/" activeStyled>
          Blog
        </NavLink>
        <NavLink to="/" activeStyled>
          Careers
        </NavLink>

        <NavLink to="/" activeStyled>
          Support
        </NavLink>

        <NavLink to="/" activeStyled>
          Privacy Policy
        </NavLink>
      </NavContainer>

      <BtnAndCopyrights>
        <InviteBtn to="/invite" />
        <Copyright>© Easybank. All Rights Reserved</Copyright>
      </BtnAndCopyrights>
    </FooterContainer>
  );
};

export default Footer;
