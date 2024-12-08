"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const variants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 0, -3, 2, -2, 1, -1, 0],
    y: [0, -3, 0, -2, -3, -1, -2, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    },
  },
};

const fireVariants: Variants = {
  normal: {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  },
  animate: {
    d: [
      "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-3 5.5-3 5.5s4.74-1 6-2.5c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2.2 4.8-2.2 4.8s3.94-0.3 5.2-1.8c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2.8 5.2-2.8 5.2s4.54-0.7 5.8-2.2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    ],
    transition: {
      duration: 2,
      ease: [0.4, 0, 0.2, 1],
      repeat: Infinity,
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

const RocketIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => {
        controls.start("animate");
      }}
      onMouseLeave={() => {
        controls.start("normal");
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={variants}
        animate={controls}
      >
        <motion.path
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          variants={fireVariants}
          animate={controls}
        />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </motion.svg>
    </div>
  );
};

export { RocketIcon };
