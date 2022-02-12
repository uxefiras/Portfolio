import styled from "styled-components";
import { motion } from "framer-motion";

function Wave() {
  return (
    <WaveContainer
      width="1967"
      height="232"
      viewBox="0 0 1967 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M3 2C56.453 119.833 318.418 314.4 938.654 150C1558.89 -14.4 1880.65 134.833 1964 230"
        stroke="#e369f3"
        stroke-width="15"
      />
    </WaveContainer>
  );
}

const WaveContainer = styled.svg`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-1%, -50%);
  z-index: -1;
`;

export default Wave;
