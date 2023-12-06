import { BG_2, GALAXY } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-2xl md:text-5xl relative z-10"
      >
       ชุมชนเข้มแข็ง คนไทยแข็งแรง
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${GALAXY.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${BG_2.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}