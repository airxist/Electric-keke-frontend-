import useTitle from "../../hooks/useTitle";
import Section from "../../sharedLayouts/Section";
import Hero from "../../components/landings/Hero";
import PageBriefing from "../../components/landings/PageBriefing";
import Services from "../../components/landings/Services";
import Connected from "../../components/landings/Connected";
import Testimonial from "../../components/landings/Testimonial";
import Mission from "../../components/landings/Mission";
import Footer from "../../components/shared/Footer";

const Home = () => {
  useTitle("Home");

  return (
    <Section blurHeader={true}>
      <Hero />
      <PageBriefing />
      <Services />
      <Mission />
      <Testimonial />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Home;
