import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import HowItWorks from "@/components/HowItWorks";
import SampleResponses from "@/components/SampleResponses";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import Limitations from "@/components/Limitations";
import FutureFeatures from "@/components/FutureFeatures";
import AboutCreator from "@/components/AboutCreator";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="why-it-matters">
        <WhyItMatters />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="sample-responses">
        <SampleResponses />
      </div>
      <WhoItsFor />
      <div id="faq">
        <FAQ />
      </div>
      <Limitations />
      <FutureFeatures />
      <AboutCreator />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
