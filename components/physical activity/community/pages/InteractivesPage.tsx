import { FC, useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import AOS from "aos";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import {
  ARM_LEFT,
  ARM_RIGHT,
  BG,
  BG_2,
  BG_COMMUNITY,
  BG_HOME,
  BG_MAP,
  CHECK_UP,
  EXCERCISE,
  GAME_CIRCLE,
  GAME_SPLASHSCREEN,
  MEN_DANCE,
  REST,
  ROLLLER_CIRCLE,
  SCROLL_CIRCLE,
  TENSE,
  TITLE,
  WOMEN_DANCE,
} from "../../../../assets";
import Link from "next/link";

interface InteractivesPageProps {}

const InteractivesPage: FC<InteractivesPageProps> = ({}) => {
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
      document
        .getElementById("behavior-title")
        .classList.add("slide-in-elliptic-top-fwd");

      document
        .getElementById("behavior-subtitle")
        .classList.add("scale-in-center");
    } else {
      document
        .getElementById("behavior-title")
        .classList.remove("slide-in-elliptic-top-fwd");

      document
        .getElementById("behavior-subtitle")
        .classList.remove("scale-in-center");
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
          height: "100dvh",
          width: "100% !important",
          // backgroundColor: "#FFF2C6 !important",
          position: "relative",
          pt: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "visible !important",
        }}
      >
        <Box className="flex flex-col justify-start items-center gap-10 h-full w-full">
          <motion.div
            className="relative w-fit leading-none"
            animate={{ y: [0, 5, -15], scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              times: [0, 0.5, 1],
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          >
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              id="behavior-title"
              sx={{
                textAlign: "top",
                color: "#F47920",
                fontSize: "5rem",
                fontWeight: "bold",
                textShadow:
                  " 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
              }}
              className="drop-shadow-lg  leading-tight"
            >
              INTERACTIVES
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              id="behavior-subtitle"
              sx={{
                textAlign: "center",
                color: "#138E77",
                fontSize: "4rem",
                fontWeight: "",
                textShadow:
                  " 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
              }}
              className="drop-shadow-lg  leading-tight"
            >
              ส่งเสริมการทำงาน
            </Typography>
          </motion.div>

          <section className="flex justify-around w-full">
            <Link
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="700"
              data-aos-offset="100"
              className="flex flex-col gap-4"
              href="https://www.gforcesolution.com/app/2023/LearningOnlineSSS/games/src/"
              target="_blank"
            >
              <Typography className="text-center text-[#F47920] text-3xl font-bold">
                Game
              </Typography>

              <div
                // data-aos="zoom-in"
                // data-aos-duration="400"
                // data-aos-delay="700"
                // data-aos-offset="100"
                className=" rounded-full bg-[#20C382] w-[20rem] h-[20rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer overflow-hidden "
                style={{
                  backgroundImage: `url(${GAME_CIRCLE.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-4xl">
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  แค่ขยับ
                </p>
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  =
                </p>
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  ออกกำลังกาย
                </p>
              </div>
            </Link>

            <Link
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="1000"
              data-aos-offset="100"
              className="flex flex-col gap-4"
              href="https://www.gforcesolution.com/app/theverse/game/rollercoser.html"
              target="_blank"
            >
              <Typography className="text-center text-[#F47920] text-3xl font-bold">
                Interactive
              </Typography>

              <div
                // data-aos="zoom-in"
                // data-aos-duration="400"
                // data-aos-delay="1000"
                // data-aos-offset="100"
                className=" rounded-full bg-[#20C382] w-[20rem] h-[20rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer overflow-hidden "
                style={{
                  backgroundImage: `url(${ROLLLER_CIRCLE.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-4xl">
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  Interactive
                </p>
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  Discover WebGL
                </p>
              </div>
            </Link>

            <Link
              href="#"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="1300"
              data-aos-offset="0"
              className="flex flex-col gap-4"
            >
              <Typography className="text-center text-[#F47920] text-3xl font-bold">
                Interactive
              </Typography>

              <div
                // data-aos="zoom-in"
                // data-aos-duration="400"
                // data-aos-delay="1300"
                // data-aos-offset="0"
                className=" rounded-full bg-[#20C382] w-[20rem] h-[20rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer overflow-hidden "
                style={{
                  backgroundImage: `url(${SCROLL_CIRCLE.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-4xl">
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  Interactive
                </p>
                <p className="text-center text-[#F47920]  font-bold leading-none">
                  Side Scrolling
                </p>
              </div>
            </Link>
          </section>
        </Box>

        <Container maxWidth="xl" className="absolute h-auto overflow-visible">
          <div ref={behaviorTitleRef}></div>
        </Container>
      </Box>
    </Box>
  );
};

export default InteractivesPage;
