import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Title1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  color: var(--Dark-Blue);

  padding: 0 2rem;
`;

export const TextStyled = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 2rem;
  color: var(--Grayish-Blue);
`;

export const InviteBtnStyled = styled(Link)`
  border-radius: 32px;
  padding: 1rem 1.7rem;
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
  font-size: 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
