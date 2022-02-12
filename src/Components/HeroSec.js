/* import styled from "styled-components"; */
import { Heromain, Description, Img, Hide } from "../style.js";
import { motion } from "framer-motion";
import { item, fade, photoAnim } from "../PageAnimation.js";
import Wave from "./Wave.js";
function HeroSection() {
  return (
    <Heromain>
      <Description>
        <Wave />
        <div className="text-on">
          <Hide>
            <motion.h2 variants={item}>
              Welcome to <span>Firas M. Faraj</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={item}>
              Profile in Case U don't know me
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={item}>
              I'm a <span>UX Engineer</span>
            </motion.h2>
          </Hide>

          <motion.p variants={fade}>
            Contact Me by Clicking on the button below
          </motion.p>
        </div>
        <motion.button variants={fade} className="clicker">
          Contact
        </motion.button>
      </Description>
      <Img>
        <motion.img
          variants={photoAnim}
          src="https://images.unsplash.com/photo-1643858040028-44457eb60163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Guy"
        />
      </Img>
    </Heromain>
  );
}

export default HeroSection;
