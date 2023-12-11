import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  LAYER2,
  LAYER3,
  TITLE,
} from "@/assets";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

export default function TitlePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        height: "100dvh",
        position: "relative",
      }}
    >
      {/* ส่วนชื่อ */}
      <Box
        data-aos="fade-up"
        data-aos-duration="2000"
        sx={{
          position: "relative",
          top: "30%",
          zIndex: "10",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "fit-content !important",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "10",
          }}
        >
          <Image
            src={TITLE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[500px] z-20 title-header relative"
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

      {/* เมือง */}
      <Box
        sx={{
          position: "relative",
          width: "100% !important",
          height: "100% !important",
        }}
      >
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
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[1%] left-0 z-[1]"
        >
          <Image
            src={LAYER2.src}
            width={1280}
            height={1280}
            alt="LAYER2"
            className="w-full "
            draggable={false}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[1%] left-0 z-[0]"
        >
          <Image
            src={LAYER3.src}
            width={1280}
            height={1280}
            alt="LAYER3"
            className="w-full "
            draggable={false}
          />
        </div>
      </Box>
    </Box>
  );
}
