import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  MEN_DANCE,
  TITLE,
  WOMEN_DANCE,
} from "@/assets";
import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";

export default function DescriptionPage() {
  const target = useRef(null);

  // const bottomCityParallax = useParallax({
  //   speed: 40,
  //   targetElement: target.current,
  //   translateX: [-110, 100],
  // });

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
          py: "5rem",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <Box className="flex justify-center items-center translate-y-[-15%]">
          <Box className="relative w-fit">
            <motion.img
              src={TITLE.src}
              width={512}
              height={512}
              alt="title"
              className="w-[400px] z-20  relative "
              draggable={false}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 5, -25], rotate: [0, 0, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.75,
                times: [0, 0.5, 1],
                easings: ["easeInOut", "easeInOut", "easeInOut"],
                repeatType: "mirror",
              }}
            />

            <Image
              src={ARM_LEFT.src}
              width={512}
              height={512}
              alt="ARM_LEFT"
              className="w-[50%] absolute bottom-[-23%] left-[-20%] arm-left"
              draggable={false}
            />
            <Image
              src={ARM_RIGHT.src}
              width={512}
              height={512}
              alt="ARM_RIGHT"
              className="w-[50%] absolute bottom-[-23%]  right-[-20%] arm-right"
              draggable={false}
            />
          </Box>
        </Box>

        <Container maxWidth="md">
          <div
            className=""
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "1rem",

                  lg: "1.5rem",
                },
              }}
            >
              สังคมเมืองยุคปัจจุบัน ที่หลายคนต้องจดจ่อกับหน้าที่การงาน การเรียน
              จนทำให้ละเลยหรือไม่มีเวลาสำหรับสุขภาพตัวเองมากนัก การออกกำลังกาย
              ถือเป็นวัคซีนชั้นดี ที่ไม่มีใครสามารถผลิตได้ ฉะนั้น
              การออกกำลังกายจึงต้องสร้างขึ้นด้วยตัวเอง
              ซึ่งการออกกำลังกายไม่จำเป็นต้องลงทุนอะไร เพราะอยู่ที่ไหน ใครๆ
              ก็สามารถออกกำลังกายได้
            </Typography>
          </div>

          <motion.div
            className="mt-10"
            // data-aos="fade-right"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.75,
              easings: ["easeInOut", "easeInOut", "easeInOut"],
              repeatType: "mirror",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#F37520",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              จะรอช้าทำไม ลุกขึ้นมาขยับกันได้ทันที!!
            </Typography>
          </motion.div>
        </Container>
        <div className=" z-20 flex-grow absolute bottom-[-3%] w-full">
          <Box
            sx={{
              position: "relative",
            }}
          >
            <div className="absolute bottom-10 right-[15%]">
              <motion.img
                src={MEN_DANCE.src}
                width={1280}
                height={1280}
                alt="FOREGROUND"
                className="h-[400px] w-auto object-contain"
                draggable={false}
                animate={{
                  x: [10, -5, 10],
                  y: [10, 0, -10],
                  rotate: [5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  times: [0, 0.4, 1],
                  repeatType: "mirror",
                }}
              />
              {/* <Image
              src={MEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain men-dance"
              draggable={false}
            /> */}
            </div>
            <div className="absolute bottom-10 left-[15%]">
              <motion.img
                src={WOMEN_DANCE.src}
                width={1280}
                height={1280}
                alt="FOREGROUND"
                className="h-[400px] w-auto object-contain "
                draggable={false}
                animate={{ x: [10, -10, 10], rotate: [5, -5, 5] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1,
                }}
              />
              {/* <Image
              src={WOMEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain women-dance"
              draggable={false}
            /> */}
            </div>
          </Box>
          {/* <div className="absolute bottom-0 right-[20%]">
          <Image
            src={MEN_DANCE.src}
            width={1280}
            height={1280}
            alt="FOREGROUND"
            className="h-[400px] w-auto object-contain men-dance"
            draggable={false}
          />
        </div>
        <div className="absolute bottom-[4%] left-[20%]">
          <Image
            src={WOMEN_DANCE.src}
            width={1280}
            height={1280}
            alt="FOREGROUND"
            className="h-[400px] w-auto object-contain men-dance"
            draggable={false}
          />
        </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[1%] left-0 z-[2]"
        >
          <Image
            src={FOREGROUND.src}
            width={1280}
            height={1280}
            alt="FOREGROUND"
            className="w-full "
            draggable={false}
          />
        </div>
      </Box>
    </Box>
  );
}
