import { FC, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import AOS from "aos";
import { motion, useScroll } from "framer-motion";

interface SituationPageProps {}

const SituationPage: FC<SituationPageProps> = ({}) => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll();

  const mage = useParallax<HTMLDivElement>({
    // scale: [0.5, 1, "easeInQuad"]
    opacity: [0, 1, "easeInQuad"],
    startScroll: 0.1,
  });

  const frog = useParallax<HTMLDivElement>({
    scale: [0, 1, "easeInQuad"],
    startScroll: 0.5,
  });

  const moon = useParallax<HTMLDivElement>({
    scale: [0, 1, "easeInQuad"],
    startScroll: 0.9,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <Box
      sx={{
        height: "200dvh",
        width: "100% !important",
        backgroundColor: "#FFF2C6 !important",
        position: "relative",
        py: "5rem",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        overflow: "hidden",
      }}
    >
      <Box
        data-aos="fade-up"
        data-aos-duration="2000"
        sx={{
          position: "relative",
          top: "30%",
          zIndex: "10",
        }}
        className=""
      >
        <motion.div className="">{scrollYProgress}</motion.div>
        eweweewwwwwwwwwwwwwwwwwwww
        <Box className={`flex justify-center items-center`}>
          <div className={`mage h-40 w-40 text-4xl `} ref={mage.ref}>
            🧙🏻‍♂️111
          </div>
          <div className="frog h-40 w-40 text-4xl" ref={frog.ref}>
            🐸222
          </div>
          <div className="moon h-40 w-40 text-4xl" ref={moon.ref}>
            🌚333
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default SituationPage;
