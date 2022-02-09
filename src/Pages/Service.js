import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../PageAnimation";
function Services() {
  return (
    <div className="services">
      <ServiceItself
        variants={PageAnimation}
        initial="initial"
        animate="show"
        exit="exit"
      >
        <h1>Service 1</h1>
        <div className="line"> </div>
        <Link to="/services/DroobUni">
          <img
            src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="eng"
          />
        </Link>
      </ServiceItself>
      <ServiceItself>
        <h1>Service 1</h1>
        <div className="line"> </div>
        <Link to="/services/ClueBook">
          <img
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="eng"
          />
        </Link>
      </ServiceItself>
    </div>
  );
}

const ServiceItself = styled(motion.div)`
  display: block;
  min-height: 100vh;
  padding: 5rem 10rem;

  h1 {
    color: #fff;
  }

  .line {
    height: 0.2rem;
    background-color: white;
    margin: 1rem 0;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Services;
