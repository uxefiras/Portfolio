import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const useScroll = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  if (inView) {
    controls.start("show");
  } else {
    controls.start("initial");
  }
  return [ref, controls];
};
