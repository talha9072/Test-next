"use client";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  duration = 0.75,
  delay = 0,
  distance = 40,
  direction = "up",
  once = true,
  blur = true,           // ⭐ blur effect
  spring = false,        // ⭐ spring movement
  zoomIntensity = 0.95,  // ⭐ zoom reveal intensity
  rotate = false,        // ⭐ micro rotate reveal
}) {
  
  // Direction presets
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    zoom: { scale: zoomIntensity },
    fade: {},
  };

  // Choose easing
  const easing = spring
    ? {
        type: "spring",
        stiffness: 110,
        damping: 18,
      }
    : {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // ⭐ smoother than easeOut
      };

  // Subtle rotate
  const rotateEffect = rotate ? { rotate: 2 } : {};

  // Blur effect
  const blurEffect = blur ? { filter: "blur(6px)" } : {};

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
        ...rotateEffect,
        ...blurEffect,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      transition={easing}
      viewport={{ once, amount: 0.3 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
