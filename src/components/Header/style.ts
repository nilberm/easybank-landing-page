import styled from "styled-components";

import { NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  min-width: 320px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  background: #fff;
`;

export const Logo = styled.div`
  @media screen and (max-width: 1024px) {
    margin-left: 2rem;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 80%;
    height: 320px;
    top: 120px;
    left: 0;
    right: 0;
    background: #fff;
    margin: 0 auto;

    transition: all 0.2s ease-in-out;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  color: var(--Grayish-Blue);

  &.active {
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 32px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  color: #fff;
  background: rgb(49, 211, 92);
  background: linear-gradient(
    273deg,
    rgba(49, 211, 92, 1) 35%,
    rgba(43, 183, 218, 1) 100%
  );
  font-weight: 500;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
