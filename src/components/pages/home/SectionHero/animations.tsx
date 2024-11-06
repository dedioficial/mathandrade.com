export const sectionHeroAnimations = {
  image: {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
  firstParagraph: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 1.8 },
  },
  name: {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
  secondParagraph: {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 1.8 },
  },
};
