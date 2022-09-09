import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 0;
  background: var(--Very-Light-Gray);

  @media (min-width: 768px) {
    padding: 4rem calc((100vw - 1000px) / 2);
  }
`;

export const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  margin: 2rem;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const TextContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 0.8rem;
    color: var(--Grayish-Blue);
  }

  p {
    color: var(--Grayish-Blue);
  }
`;
