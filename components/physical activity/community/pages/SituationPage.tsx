import { FC, useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import AOS from "aos";
import { motion, useScroll } from "framer-motion";
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
} from "@/assets";

interface SituationPageProps {}

const SituationPage: FC<SituationPageProps> = ({}) => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll();

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
        // backgroundColor: "#FFF2C6 !important",
        position: "relative",
        py: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        overflow: "visible !important",
      }}
    >
      <Box className="flex justify-start items-start translate-y-[-150%]">
        <Box className="relative w-fit">
          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            sx={{
              textAlign: "top",
              color: "#138E77",
              fontSize: "5rem",
              fontWeight: "bold",
              textShadow:
                " 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
            }}
            className="drop-shadow-lg"
          >
            &quot;พฤติกรรม<span className="text-[6rem]">เสี่ยง</span>&quot;
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="800"
            sx={{
              textAlign: "center",
              color: "#F47920",
              fontSize: "5rem",
              fontWeight: "bold",
            }}
          >
            ที่หลายคนยังไม่รู้
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="xl" className="absolute h-auto overflow-visible">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="absolute top-0 left-0 rounded-full bg-[#20C382] w-[30rem] h-[30rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 translate-x-[50%] hover:scale-[1.02] cursor-pointer"
        >
          <motion.img
            src={CHECK_UP.src}
            width={512}
            height={512}
            alt="title"
            className="w-[250px] z-[999]  relative bg-cover object-cover top-[-20%] place-self-center overflow-visible"
            draggable={false}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 5, -15], rotate: [0, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              times: [0, 0.5, 1],
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          />
          <Box className="row-span-2">
            <Typography
              sx={{
                textAlign: "center",
                color: "#343434",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              ไม่ได้ตรวจสุขภาพประจำปี
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "2.5rem",
                fontWeight: "",
              }}
            >
              425,820 คน
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "1.6rem",
                fontWeight: "",
              }}
            >
              คิดเป็นร้อยละ 24.84
            </Typography>
          </Box>
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="absolute top-0 right-0 rounded-full bg-[#20C382] w-[30rem] h-[30rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 translate-x-[-50%] overflow-visible hover:scale-[1.02] cursor-pointer"
        >
          <motion.img
            src={REST.src}
            width={512}
            height={512}
            alt="title"
            className="w-[200px] z-[999]  relative bg-cover object-cover top-[-20%] place-self-center overflow-visible"
            draggable={false}
            whileHover={{ scale: 1.1 }}
            animate={{ x: [4, -4, 0], y: [0, 0, -8], rotate: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              times: [0, 0.5, 1],
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          />
          <Box className="row-span-2">
            <Typography
              sx={{
                textAlign: "center",
                color: "#343434",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              ทำงานหนัก พักผ่อนน้อย
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "2.5rem",
                fontWeight: "",
              }}
            >
              335,805 คน
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "1.6rem",
                fontWeight: "",
              }}
            >
              คิดเป็นร้อยละ 19.14
            </Typography>
          </Box>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="5000"
          className="absolute bottom-0 left-0 rounded-full bg-[#20C382] w-[30rem] h-[30rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3 translate-x-[-35%] hover:scale-[1.02] cursor-pointer"
        >
          <motion.img
            src={EXCERCISE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[250px] z-[999]  relative bg-cover object-cover top-[-20%] place-self-center overflow-visible"
            draggable={false}
            whileHover={{ scale: 1.1 }}
            animate={{ x: [0, 5, -25], rotate: [0, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              times: [0, 0.5, 1],
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          />
          <Box className="row-span-2">
            <Typography
              sx={{
                textAlign: "center",
                color: "#343434",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              ไม่ได้ออกกำลังกาย
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "2.5rem",
                fontWeight: "",
              }}
            >
              520,421 คน
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "1.6rem",
                fontWeight: "",
              }}
            >
              คิดเป็นร้อยละ 29.66
            </Typography>
          </Box>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="absolute bottom-0 right-0 rounded-full bg-[#20C382] w-[30rem] h-[30rem] z-10 text-center grid grid-rows-3 justify-center items-center p-3  translate-x-[30%] hover:scale-[1.02] cursor-pointer"
        >
          <motion.img
            src={TENSE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[250px] z-[999]  relative bg-cover object-cover top-[-20%] place-self-center overflow-visible"
            draggable={false}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.1, 0.95] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              times: [0, 0.5, 1],
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          />
          <Box className="row-span-2">
            <Typography
              sx={{
                textAlign: "center",
                color: "#343434",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              มีความเครียด
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "2.5rem",
                fontWeight: "",
              }}
            >
              54,677 คน
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "1.6rem",
                fontWeight: "",
              }}
            >
              คิดเป็นร้อยละ 3.12
            </Typography>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default SituationPage;
