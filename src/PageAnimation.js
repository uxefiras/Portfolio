export const PageAnimation = {
  initial: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const item = {
  initial: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const fade = {
  initial: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const photoAnim = {
  initial: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.75 } },
};
