import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: var(--Light-Grayish-Blue);
  padding: 4rem 0;
`;

export const TextApresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  gap: 1.5rem;

  p {
    color: var(--Grayish-Blue);
    font-size: 1rem;
  }
`;
