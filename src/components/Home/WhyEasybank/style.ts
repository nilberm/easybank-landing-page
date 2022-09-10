import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: var(--Light-Grayish-Blue);

  padding: 4rem calc((100vw - 1200px) / 2);

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const TextApresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  place-items: center;
  width: 100%;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    place-items: initial;
    padding-left: 2rem;
  }
  @media (min-width: 1090px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  gap: 1.5rem;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: start;
  }

  p {
    color: var(--Grayish-Blue);
    font-size: 1rem;
  }
`;
