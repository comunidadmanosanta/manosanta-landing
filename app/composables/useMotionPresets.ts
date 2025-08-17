export const useMotionPresets = () => {
  const presets = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -30 },
      enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -30 },
      enter: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 30 },
      enter: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9 },
      enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    },
  };

  return { presets };
};
