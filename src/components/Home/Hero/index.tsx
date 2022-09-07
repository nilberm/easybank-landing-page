import { InviteBtn, MainTitle, Text } from "../../Elements";
import {
  HeroContainer,
  ImageHero,
  Section,
  InformationContainer,
} from "./style";

import HeroImage from "../../../assets/image-mockups.png";

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <ImageHero>
          <img
            className="heroImage"
            src={HeroImage}
            alt="Bank App on cellphone"
          />
        </ImageHero>
        <InformationContainer>
          <MainTitle text="Next generation digital banking" />
          <Text text="Take your life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more" />
          <InviteBtn to="/invite" />
        </InformationContainer>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
