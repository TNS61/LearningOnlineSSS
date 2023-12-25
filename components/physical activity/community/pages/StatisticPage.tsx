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
  MEN_DANCE,
  ORANGE_ARROW_DOWN,
  PERSON_RUN,
  REST,
  TENSE,
  TITLE,
  WOMEN_DANCE,
} from "../../../../assets";

interface StatisTicPageProps {}

const StatisticPage: FC<StatisTicPageProps> = ({}) => {
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
        items[i].classList.add("slide-in-elliptic-top-fwd");
      }
    } else {
      const items = document.getElementsByClassName("statistic-title");
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("slide-in-elliptic-top-fwd");
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
          height: "100dvh",
          width: "100% !important",
          backgroundColor: "#FFF2C6 !important",
          position: "relative",
          pb: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "hidden !important",
        }}
      >
        <Box className="flex justify-start items-start translate-y-[-70%] ">
          <motion.div
            className="relative w-fit"
            animate={{
              scale: [1, 1.05, 1.1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "mirror",
            }}
          >
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              // data-aos-offset="1000"
              data-aos-offset="3000"
              sx={{
                textAlign: "center",
                color: "#3D3D3D",
                fontSize: "3rem",
                fontWeight: "bold",
                // textShadow:
                //   " 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
              }}
              className="statistic-title "
            >
              สถิติที่
              <motion.span className="text-orange-600">
                น่าตกใจโควิด-19
              </motion.span>
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="1500"
              sx={{
                textAlign: "center",
                color: "#3D3D3D",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
              className="statistic-title"
            >
              ส่งผลต่อการมีกิจกรรมทางกาย
            </Typography>
          </motion.div>
        </Box>

        <Container maxWidth="xl" className="absolute h-auto overflow-visible">
          <div ref={behaviorTitleRef}></div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="700"
            data-aos-offset="200"
            className="absolute top-0 left-[5%] rounded-full  w-[25rem] h-[25rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="900"
              data-aos-offset="400"
              className="flex items-start justify-center top-[0%] relative"
            >
              <motion.h2
                className="text-7xl font-bold text-yellow-400"
                // animate={{ y: [0, 5, -15], rotate: [0, 0, 0] }}
                // transition={{
                //   repeat: Infinity,
                //   duration: 0.75,
                //   times: [0, 0.5, 1],
                //   easings: ["easeInOut", "easeInOut", "easeInOut"],
                //   repeatType: "mirror",
                // }}
              >
                ปี 2562
              </motion.h2>
            </div>
            <Box className="row-span-2 flex flex-row flex-wrap-reverse items-center justify-center">
              <div className="flex flex-row-reverse">
                {Array.from({ length: 5 }, (_, i) => i).map((item, i) => (
                  <img
                    data-aos="fade-right"
                    data-aos-duraton="50"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={1000 + i * 150}
                    data-aos-offset="200"
                    src={PERSON_RUN.src}
                    alt="person run"
                    className="w-20 h-20"
                    key={i}
                  />
                ))}
              </div>
              <div className="flex flex-row-reverse">
                {Array.from({ length: 5 }, (_, i) => i).map((item, i) => (
                  <img
                    data-aos="fade-right"
                    data-aos-duraton="50"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={500 + i * 150}
                    data-aos-offset="300"
                    src={PERSON_RUN.src}
                    alt="person run"
                    className="w-20 h-20"
                    key={i}
                  />
                ))}
              </div>
            </Box>
            <Typography
              data-aos="zoom-in"
              data-aos-duraton="100"
              data-aos-delay="1500"
              sx={{
                textAlign: "center",
                color: "#3D3D3D",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              คนไทยมีกิจกรรมทางกาย
            </Typography>
            <Typography
              data-aos="zoom-in"
              data-aos-duraton="100"
              data-aos-delay="1600"
              data-aos-offset="100"
              sx={{
                textAlign: "center",
                color: "#3D3D3D",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              ร้อยละ 74.6
            </Typography>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="700"
            // data-aos-offset="200"
            className="absolute  left-[50%] translate-x-[-50%] translate-y-[-20%] lg:w-[30rem] h-[30rem] z-10 text-center justify-center items-center p-3 cursor-pointer"
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

          <div
            // data-aos="zoom-in"
            // data-aos-duration="400"
            // data-aos-delay="1000"
            // data-aos-offset="300"
            className="absolute top-0 right-[5%] rounded-full w-[25rem] h-[25rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 overflow-visibl cursor-pointer"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="400"
              // data-aos-delay="2500"
              data-aos-delay="1500"
              data-aos-offset="400"
              className="absolute  left-0 translate-x-[0%] translate-y-[-50%] lg:w-[5rem] h-[5rem] z-10 text-center justify-center items-center p-3 cursor-pointer"
            >
              <motion.img
                src={ORANGE_ARROW_DOWN.src}
                alt="arrow down"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.75,
                  times: [0, 0.5, 1],
                  easings: ["easeInOut", "easeInOut", "easeInOut"],
                  repeatType: "mirror",
                }}
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="1650"
              data-aos-offset="400"
              className="flex items-start justify-center top-[0%] relative"
            >
              <motion.h2
                className="text-7xl font-bold text-yellow-400"
                // animate={{ y: [0, 5, -15], rotate: [0, 0, 0] }}
                // transition={{
                //   repeat: Infinity,
                //   duration: 0.75,
                //   times: [0, 0.5, 1],
                //   easings: ["easeInOut", "easeInOut", "easeInOut"],
                //   repeatType: "mirror",
                // }}
              >
                ปี 2563
              </motion.h2>
            </div>
            <Box className="row-span-2 flex flex-row flex-wrap-reverse items-center justify-center">
              <div className="flex flex-row-reverse">
                {Array.from({ length: 3 }, (_, i) => i)
                  .map((item, i) => (
                    <img
                      data-aos="fade-right"
                      data-aos-duraton="100"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={2000 + i * 150}
                      data-aos-offset="200"
                      src={PERSON_RUN.src}
                      alt="person run"
                      className="w-20 h-20"
                      key={i}
                    />
                  ))
                  .reverse()}
              </div>
              <div className="flex flex-row-reverse">
                {Array.from({ length: 3 }, (_, i) => i)
                  .map((item, i) => (
                    <img
                      data-aos="fade-right"
                      data-aos-duraton="100"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={1300 + i * 150}
                      data-aos-offset="300"
                      src={PERSON_RUN.src}
                      alt="person run"
                      className="w-20 h-20"
                      key={i}
                    />
                  ))
                  .reverse()}
              </div>
            </Box>
            <Typography
              data-aos="zoom-in"
              data-aos-duraton="100"
              data-aos-delay="2500"
              sx={{
                textAlign: "center",
                color: "#3D3D3D",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              คนไทยมีกิจกรรมทางกาย
            </Typography>
            <motion.span
              animate={{
                scale: [1, 1.05, 1.1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                repeatType: "mirror",
              }}
            >
              <Typography
                data-aos="zoom-in"
                data-aos-duraton="100"
                data-aos-delay="2600"
                data-aos-offset="100"
                sx={{
                  textAlign: "center",
                  color: "#3D3D3D",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                ร้อยละ 55.5{" "}
                <span className="text-[1.5rem] text-orange-500">
                  แย่ลงที่สุด
                </span>
              </Typography>
            </motion.span>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default StatisticPage;
