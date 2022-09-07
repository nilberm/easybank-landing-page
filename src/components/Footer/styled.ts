import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: var(--Dark-Blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Logo = styled.div`
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 2rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: var(--White);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--Grayish-Blue);
    transition: all 0.2s ease-in-out;
  }
`;

export const BtnAndCopyrights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Copyright = styled.div`
  color: var(--Grayish-Blue);
`;
