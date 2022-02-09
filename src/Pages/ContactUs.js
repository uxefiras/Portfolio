import { motion } from "framer-motion";
import { PageAnimation } from "../PageAnimation";
function ContactUs() {
  return (
    <motion.div
      variants={PageAnimation}
      initial="initial"
      animate="show"
      exit="exit"
    >
      <h1>Contact us</h1>
    </motion.div>
  );
}

export default ContactUs;
