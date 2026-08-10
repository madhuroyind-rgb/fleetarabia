"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  // Always render the motion element, even when motion is reduced. The server
  // cannot know the client's motion preference, so it always emits the
  // animated branch with an inline opacity:0. Swapping to a plain div on the
  // client leaves that inline style orphaned and the content invisible for
  // good — so keep framer-motion in control and just skip the animation.
  return (
    <motion.div
      data-reveal
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
