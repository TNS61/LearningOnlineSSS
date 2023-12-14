import { FC, useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import AOS from "aos";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import {
  ARM_LEFT,
  ARM_RIGHT,
  CHECK_UP,
  EXCERCISE,
  FAT_PERSON_01,
  FAT_PERSON_ANIM,
  GAME_BG,
  GAME_SPLASHSCREEN,
  MEN_DANCE,
  ONE_NUMBER,
  ORANGE_ARROW_DOWN,
  PERSON_RUN,
  REST,
  START_TEXT,
  TENSE,
  THREE_NUMBER,
  TITLE,
  TWO_NUMBER,
  WOMEN_DANCE,
} from "../../../../assets";
import Link from "next/link";

interface GamePageProps {}

const GamePage: FC<GamePageProps> = ({}) => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll();

  const behaviorTitleRef = useRef(null);
  const isInView = useInView(behaviorTitleRef);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      const items = document.getElementsByClassName("statistic-title");
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("slide-in-top");
      }
    } else {
      const items = document.getElementsByClassName("statistic-title");
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("slide-in-top");
      }
    }
  }, [isInView]);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0px",
        overflow: "hidden",
        width: "100%",
        height: "100dvh",
      }}
      className="sticky-container"
    >
      <Box
        sx={{
          height: "120dvh",
          width: "100% !important",
          backgroundColor: "#FFF2C6 !important",
          position: "relative",
          py: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "hidden !important",
          backgroundImage: `url(${GAME_BG.src})`,
        }}
      >
        <Box className="flex justify-start items-start ">
          <Link
            href="https://www.gforcesolution.com/app/2023/LearningOnlineSSS/games/src/"
            target="_blank"
          >
            <img src={GAME_SPLASHSCREEN.src} alt="game splashscreen" />
          </Link>
          <div className="">START</div>
        </Box>

        <Container maxWidth="xl" className="absolute h-auto overflow-visible">
          <div ref={behaviorTitleRef}></div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="300"
            data-aos-offset="200"
            className="absolute  left-[5%] translate-x-[-50%] translate-y-[-50%] lg:w-[30rem] h-[30rem] z-10 text-center justify-center items-center p-3 cursor-pointer"
          >
            <motion.img
              src={FAT_PERSON_ANIM.src}
              alt="FAT MAN"
              // rotate by swaying the top in x axis
              animate={{
                rotateZ: [0, "5deg", 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.75,
                times: [0, 0.5, 1],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
              className="origin-bottom"
            />
          </div>
        </Container>
        <div
          // data-aos="zoom-in"
          // data-aos-duration="400"
          // data-aos-delay="1000"
          // data-aos-offset="300"
          className="absolute top-0 right-0 w-[33%] h-full max-h-[100svh] z-10 text-center grid grid-rows-4  py-[5%] justify-center items-center cursor-pointer"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="300"
            data-aos-offset="200"
            className="flex justify-start items-center"
          >
            <motion.img
              src={THREE_NUMBER.src}
              alt="3"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.75,
                times: [0, 0.5, 1],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
              className="w-[10rem] h-[10rem]"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="400"
            data-aos-offset="200"
            className="flex justify-center items-center translate-x-[20%]"
          >
            <motion.img
              src={TWO_NUMBER.src}
              alt="2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.75,
                times: [0, 0.25, 0.75],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
              className="w-[6rem] h-[6rem]"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="500"
            data-aos-offset="200"
            className="flex justify-center items-center translate-x-[-20%]"
          >
            <motion.img
              src={ONE_NUMBER.src}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.75,
                times: [0, 0.75, 1.25],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
              className="w-[4rem] h-[5rem]"
              alt="1"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="600"
            data-aos-offset="200"
            className="flex justify-center items-center"
          >
            <motion.img
              src={START_TEXT.src}
              alt="start text"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.25,
                times: [0, 0.5, 1],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default GamePage;
