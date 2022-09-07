import { Container } from "./style";

import Hero from "../../components/Home/Hero";
import WhyEasybank from "../../components/Home/WhyEasybank";
import Articles from "../../components/Home/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <WhyEasybank />
      <Articles />
      <Footer />
    </Container>
  );
};

export default Home;
