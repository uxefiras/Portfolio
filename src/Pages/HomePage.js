import HeroSection from "../Components/HeroSec";
import ServicesSec from "../Components/ServicesSec";
import FaqSection from "../Components/FaqSec";
import { motion } from "framer-motion";
import { PageAnimation } from "../PageAnimation";
function Homepg() {
  return (
    // add the fraction tag to contain divs from components fot homepage
    <motion.div
      variants={PageAnimation}
      initial="initial"
      animate="show"
      exit="exit"
    >
      <HeroSection />
      <ServicesSec />
      <FaqSection />
    </motion.div>
  );
}

export default Homepg;
