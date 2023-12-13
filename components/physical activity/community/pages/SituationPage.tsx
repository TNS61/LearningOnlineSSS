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
  MEN_DANCE,
  REST,
  TENSE,
  TITLE,
  WOMEN_DANCE,
} from "../../../../assets";

interface SituationPageProps {}

const SituationPage: FC<SituationPageProps> = ({}) => {
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
        <Box className="flex justify-start items-start translate-y-[-80%]">
          <motion.div className="relative w-fit">
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              id="behavior-title"
              sx={{
                textAlign: "top",
                color: "#138E77",
                fontSize: "4.5rem",
                fontWeight: "bold",
                textShadow:
                  " 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
              }}
              className="drop-shadow-lg"
            >
              &quot;พฤติกรรม
              <motion.span className="text-[6rem]">เสี่ยง</motion.span>&quot;
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              id="behavior-subtitle"
              sx={{
                textAlign: "center",
                color: "#F47920",
                fontSize: "4.5rem",
                fontWeight: "bold",
              }}
              className=""
            >
              ที่หลายคนยังไม่รู้
            </Typography>
          </motion.div>
        </Box>

        <Container maxWidth="xl" className="absolute h-auto overflow-visible">
          <div ref={behaviorTitleRef}></div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="700"
            // data-aos-offset="200"
            data-aos-offset="300"
            className="absolute top-0 left-[15%] rounded-full bg-[#20C382] w-[22rem] h-[22rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="900"
              // data-aos-offset="200"
              className="flex items-start justify-center top-[-20%] relative"
            >
              <motion.img
                src={CHECK_UP.src}
                width={512}
                height={512}
                alt="title"
                className="w-[220px] z-[999]  relative bg-cover object-cover  place-self-center overflow-visible"
                draggable={false}
                animate={{ y: [0, 5, -15], rotate: [0, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.75,
                  times: [0, 0.5, 1],
                  easings: ["easeInOut", "easeInOut", "easeInOut"],
                  repeatType: "mirror",
                }}
              />
            </div>
            <Box className="row-span-2">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#343434",
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                }}
              >
                ไม่ได้ตรวจสุขภาพประจำปี
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "2rem",
                  fontWeight: "",
                }}
              >
                425,820 คน
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "",
                }}
              >
                คิดเป็นร้อยละ 24.84
              </Typography>
            </Box>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="1000"
            // data-aos-offset="300"
            data-aos-offset="400"
            className="absolute top-0 right-[15%] rounded-full bg-[#20C382] w-[22rem] h-[22rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3  overflow-visibl cursor-pointer"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              // data-aos-delay="1150"
              data-aos-delay="1050"
              // data-aos-offset="300"
              className="flex items-start justify-center top-[-50%] relative"
            >
              <motion.img
                src={REST.src}
                width={512}
                height={512}
                alt="title"
                className="w-[150px] z-[999]  relative bg-cover object-cover place-self-center overflow-visible"
                draggable={false}
                animate={{ x: [4, -4, 0], y: [0, 0, -8], rotate: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.75,
                  times: [0, 0.5, 1],
                  easings: ["easeInOut", "easeInOut", "easeInOut"],
                  repeatType: "mirror",
                }}
              />
            </div>
            <Box className="row-span-2">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#343434",
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                }}
              >
                ทำงานหนัก พักผ่อนน้อย
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "2rem",
                  fontWeight: "",
                }}
              >
                335,805 คน
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "",
                }}
              >
                คิดเป็นร้อยละ 19.14
              </Typography>
            </Box>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="600"
            // data-aos-offset="500"
            data-aos-offset="500"
            className="absolute bottom-0 left-[-5%] rounded-full bg-[#20C382] w-[22rem] h-[22rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 cursor-pointer"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="750"
              // data-aos-offset="500"
              className="flex items-start justify-center  top-[-30%] relative"
            >
              <motion.img
                src={EXCERCISE.src}
                width={512}
                height={512}
                alt="title"
                className="w-[220px] z-[999] relative bg-cover object-coverplace-self-center overflow-visible"
                draggable={false}
                animate={{ x: [0, 5, -25], rotate: [0, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.75,
                  times: [0, 0.5, 1],
                  easings: ["easeInOut", "easeInOut", "easeInOut"],
                  repeatType: "mirror",
                }}
              />
            </div>
            <Box className="row-span-2">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#343434",
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                }}
              >
                ไม่ได้ออกกำลังกาย
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "2rem",
                  fontWeight: "",
                }}
              >
                520,421 คน
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "",
                }}
              >
                คิดเป็นร้อยละ 29.66
              </Typography>
            </Box>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            // data-aos-delay="1600"
            data-aos-delay="600"
            // data-aos-offset="700"
            data-aos-offset="600"
            className="absolute bottom-0 right-[-5%] rounded-full bg-[#20C382] w-[22rem] h-[22rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3  cursor-pointer"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              // data-aos-delay="1750"
              data-aos-delay="750"
              // data-aos-offset="700"
              data-aos-offset="200"
              className="flex items-start justify-center top-[-30%] relative"
            >
              <motion.img
                src={TENSE.src}
                width={512}
                height={512}
                alt="title"
                className="w-[220px] z-[999]  relative bg-cover object-cover place-self-center overflow-visible"
                draggable={false}
                animate={{ scale: [1, 1.1, 0.95] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.75,
                  times: [0, 0.5, 1],
                  easings: ["easeInOut", "easeInOut", "easeInOut"],
                  repeatType: "mirror",
                }}
              />
            </div>
            <Box className="row-span-2">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#343434",
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                }}
              >
                มีความเครียด
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "2rem",
                  fontWeight: "",
                }}
              >
                54,677 คน
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "",
                }}
              >
                คิดเป็นร้อยละ 3.12
              </Typography>
            </Box>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default SituationPage;
