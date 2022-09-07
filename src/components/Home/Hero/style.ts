import styled from "styled-components";
import backgroundHeroImage from "../../../assets/bg-intro-mobile.svg";

export const Section = styled.section`
  min-width: 320px;
  padding: 0 calc((100vw - 1000px) / 2);
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: -100px;
`;

export const ImageHero = styled.div`
  background-image: url(${backgroundHeroImage});
  background-size: cover;
  background-repeat: no-repeat;

  width: auto;

  .heroImage {
    width: 100%;
    position: relative;
    top: -80px;
    z-index: 1;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
