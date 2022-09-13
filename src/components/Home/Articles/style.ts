import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  background: var(--Very-Light-Gray);

  @media (min-width: 768px) {
    padding: 4rem calc((100vw - 1200px) / 2);
  }
`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  grid-gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 425px) {
    padding: 0;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  width: 100%;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  img {
    width: auto;
    height: 50%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  padding: 2rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 425px) {
    padding: 4rem 2rem;
  }

  span {
    font-size: 0.8rem;
    color: var(--Grayish-Blue);
  }

  p {
    color: var(--Grayish-Blue);
  }
`;
