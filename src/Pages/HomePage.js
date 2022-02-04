import HeroSection from "../Components/HeroSec";
import ServicesSec from "../Components/ServicesSec";
import FaqSection from "../Components/FaqSec";
function Homepg() {
  return (
    // add the fraction tag to contain divs from components fot homepage
    <>
      <HeroSection />
      <ServicesSec />
      <FaqSection />
    </>
  );
}

export default Homepg;
