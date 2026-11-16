// Obsidian Editorial Motion System — Snappy, Smooth Framer Motion Variants & Easing
export const easeCustom = [0.22, 1, 0.36, 1]; // Premium smooth cubic-bezier easing curve

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const fadeDown = {
  hidden: { opacity: 0, y: -22 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: easeCustom,
    },
  }),
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.04) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeCustom,
    },
  },
};

// Magnetic & Hover Interaction presets
export const cardHoverProps = {
  whileHover: {
    y: -5,
    transition: { duration: 0.22, ease: easeCustom },
  },
  whileTap: {
    scale: 0.99,
  },
};

export const buttonMotionProps = {
  whileHover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.2, ease: easeCustom },
  },
  whileTap: {
    scale: 0.97,
  },
};
