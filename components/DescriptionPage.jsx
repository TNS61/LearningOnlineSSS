import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  MEN_DANCE,
  TITLE,
  WOMEN_DANCE,
} from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DescriptionPage() {
  return (
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
      <Box className="flex justify-center items-center">
        <Box className="relative w-fit">
          <Image
            src={TITLE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[300px] z-20 title-header relative "
            draggable={false}
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

        <div className="mt-10" data-aos="fade-right">
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
        </div>
      </Container>
      <div className=" z-20 flex-grow absolute bottom-[-5%] w-full">
        <Box
          sx={{
            position: "relative",
          }}
        >
          <div className="absolute bottom-0 right-[20%]">
            <Image
              src={MEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain men-dance"
              draggable={false}
            />
          </div>
          <div className="absolute bottom-0 left-[20%]">
            <Image
              src={WOMEN_DANCE.src}
              width={1280}
              height={1280}
              alt="FOREGROUND"
              className="h-[400px] w-auto object-contain women-dance"
              draggable={false}
            />
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
        data-aos-duration="2000"
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
  );
}
