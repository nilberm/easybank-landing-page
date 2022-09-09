import styled from "styled-components";
import backgroundHeroImageMobile from "../../../assets/bg-intro-mobile.svg";
import backgroundHeroImageDesktop from "../../../assets/bg-intro-desktop.svg";

export const Section = styled.section`
  min-width: 320px;
  padding: 0 calc((100vw - 1000px) / 2) 4rem calc((100vw - 1000px) / 2);

  @media (min-width: 768px) {
    padding: 0 calc((100vw - 1000px) / 2);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: -100px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin: 0;
  }
`;

export const ImageHero = styled.div`
  background-image: url(${backgroundHeroImageMobile});
  background-size: cover;
  background-repeat: no-repeat;

  width: auto;

  @media (min-width: 768px) {
    background-image: url(${backgroundHeroImageDesktop});
    margin: -100px 0 0 0;
  }

  .heroImage {
    width: 100%;
    position: relative;
    top: -80px;
    z-index: 1;

    @media (min-width: 768px) {
      top: 80px;
    }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-left: 2rem;
  }
`;
