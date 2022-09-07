import { MainTitle, Text } from "../../Elements";
import { Card, GridCard, Section, TextApresentation } from "./style";

import iconApi from "../../../assets/icons/icon-api.svg";
import iconBudgeting from "../../../assets/icons/icon-budgeting.svg";
import iconOnboarding from "../../../assets/icons/icon-onboarding.svg";
import iconOnline from "../../../assets/icons/icon-online.svg";

const WhyEasybank = () => {
  return (
    <Section>
      <TextApresentation>
        <MainTitle text="Why choose Easybank?" />
        <Text text="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never befeore." />
      </TextApresentation>
      <GridCard>
        <Card>
          <img src={iconOnline} alt="" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </Card>
        <Card>
          <img src={iconBudgeting} alt="" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </Card>

        <Card>
          <img src={iconOnboarding} alt="" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </Card>
        <Card>
          <img src={iconApi} alt="" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </Card>
      </GridCard>
    </Section>
  );
};

export default WhyEasybank;
