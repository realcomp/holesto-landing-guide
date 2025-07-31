import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import HowItWorks from "@/components/HowItWorks";
import SampleResponses from "@/components/SampleResponses";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import Limitations from "@/components/Limitations";
import FutureFeatures from "@/components/FutureFeatures";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyItMatters />
      <HowItWorks />
      <SampleResponses />
      <WhoItsFor />
      <FAQ />
      <Limitations />
      <FutureFeatures />
      <Contact />
    </div>
  );
};

export default Index;
