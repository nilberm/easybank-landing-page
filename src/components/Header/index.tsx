import { Nav, Logo, NavLink, NavMenu, Bars, NavBtn, NavBtnLink } from "./style";

import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [handleMenuActivation, setHandleMenuActivation] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <Bars onClick={() => setHandleMenuActivation(!handleMenuActivation)} />
      <NavMenu
        style={{
          display: `${
            windowSize.innerWidth < 768 && handleMenuActivation
              ? "flex"
              : windowSize.innerWidth > 768
              ? "flex"
              : "none"
          }`,
        }}
      >
        <NavLink to="/" activeStyled>
          Home
        </NavLink>
        <NavLink to="/about" activeStyled>
          About
        </NavLink>
        <NavLink to="/contact" activeStyled>
          Contact
        </NavLink>
        <NavLink to="/blog" activeStyled>
          Blog
        </NavLink>
        <NavLink to="/careers" activeStyled>
          Careers
        </NavLink>
      </NavMenu>

      <NavBtn>
        <NavBtnLink to="invite">Request Invite</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Header;
