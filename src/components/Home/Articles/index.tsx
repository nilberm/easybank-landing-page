import { MainTitle } from "../../Elements";
import { Card, GridCard, Section, TextContainer } from "./style";

import imageConfetti from "../../../assets/image-confetti.jpg";
import imageCurrency from "../../../assets/image-currency.jpg";
import imagePlane from "../../../assets/image-plane.jpg";
import imageRestaurant from "../../../assets/image-restaurant.jpg";

const Articles = () => {
  return (
    <Section>
      <MainTitle text="Latest Articles" />
      <GridCard>
        <Card>
          <img src={imageCurrency} alt="" />
          <TextContainer>
            <span>By Claire Robinson</span>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </TextContainer>
        </Card>

        <Card>
          <img src={imageRestaurant} alt="" />
          <TextContainer>
            <span>By Wilson Hutton</span>
            <h3>Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </TextContainer>
        </Card>

        <Card>
          <img src={imagePlane} alt="" />
          <TextContainer>
            <span>By Wilson Hutton</span>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </TextContainer>
        </Card>

        <Card>
          <img src={imageConfetti} alt="" />
          <TextContainer>
            <span>By Claire Robinson</span>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </TextContainer>
        </Card>
      </GridCard>
    </Section>
  );
};

export default Articles;
