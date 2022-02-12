import styled from "styled-components";
import { motion } from "framer-motion";

export const Heromain = styled(motion.div)`
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;

  h2 {
    font-weight: lighter;
    padding-right: 5rem;
  }
`;

export const Img = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
