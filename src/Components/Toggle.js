import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Toggle({ children, tittle }) {
  const [isToggled, setToggle] = useState(false);
  return (
    <div onClick={() => setToggle(!isToggled)}>
      <motion.h1>{tittle}</motion.h1>
      {isToggled ? children : ""}
      <Line></Line>
    </div>
  );
}

const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  margin: 0.5rem 0;
  background-color: #fff;
`;

export default Toggle;
