'use client';
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import React from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 0.6,
  ...props
}: ScrollRevealProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
      case "none": return {};
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialOffset() 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easing curve
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
