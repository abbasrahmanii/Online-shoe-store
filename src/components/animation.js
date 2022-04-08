export const pageAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 2.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const descAnim = {
  hidden: {
    x: -100,
    opacity: 0.5,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const imageAnim = {
  hidden: {
    scale: 1.8,
    rotate: -25,
    opacity: 0.5,
  },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
  exit: {
    scale: 1.3,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
