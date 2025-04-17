"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function RevealOnScroll({
  children,
  direction = "left",
  className = "contents",
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "bottom" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export const useStickyNav = () => {
  const [isSticky, setSticky] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setSticky(!inView);
  }, [inView]);

  return { ref, isSticky };
};
