import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  LAYER2,
  LAYER3,
  LAYER3_LEFT,
  LAYER3_RIGHT,
  TITLE,
} from "@/assets";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import { useParallax } from "react-scroll-parallax";
import Plx from "react-plx";
import {
  LAYER2_LEFT,
  LAYER2_MID,
  LAYER2_RIGHT,
  TREE_FOREGROUND,
} from "../../../../assets";
import { motion } from "framer-motion";

export default function TitlePage() {
  const target = React.useRef(null);

  // const topCityParallax = useParallax({
  //   speed: 30,
  //   easing: "easeInOutCirc",
  //   targetElement: target.current,
  // });
  // const middleCityParallax = useParallax({
  //   speed: 40,
  //   targetElement: target.current,
  //   startScroll: 0.8,
  // });
  // const bottomCityParallax = useParallax({
  //   speed: 20,
  //   targetElement: target.current,
  //   // translateX: [-100, 100],
  //   // translateY: [0, 0],
  // });

  const leftMiddleCityParallax = useParallax({
    speed: 40,
    targetElement: target.current,
    startScroll: 0.8,
    translateX: [100, -100],
  });

  const centerMiddleCityParallax = useParallax({
    speed: 40,
    targetElement: target.current,
    startScroll: 2,
  });

  const rightMiddleCityParallax = useParallax({
    speed: 40,
    targetElement: target.current,
    startScroll: 0.6,
    translateX: [-100, 100],
  });

  const leftTopCity = useParallax({
    speed: 50,
    targetElement: target.current,
  });

  const rightTopCity = useParallax({
    speed: 50,
    targetElement: target.current,
    startScroll: 0.4,
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        height: "100dvh",
        position: "relative",
      }}
      className="overflow-x-hidden"
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
            transform: "translate(-50%,-70%)",
            zIndex: "10",
          }}
        >
          <Image
            ref={leftMiddleCityParallax.ref}
            src={TITLE.src}
            width={512}
            height={512}
            alt="title"
            className="w-[500px] z-20 title-header relative"
            draggable={false}
          />
          <Image
            ref={centerMiddleCityParallax.ref}
            src={ARM_LEFT.src}
            width={512}
            height={512}
            alt="ARM_LEFT"
            className="w-[50%] absolute bottom-[-23%] left-[-20%] arm-left"
            draggable={false}
          />
          <Image
            ref={rightMiddleCityParallax.ref}
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
        ref={target}
        sx={{
          position: "relative",
          width: "100% !important",
          height: "100% !important",
        }}
      >
        {/* <div
          ref={bottomCityParallax.ref}
          // data-aos="fade-up"
          // data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[3%] left-0 z-[2]"
        >
          <Image
            src={FOREGROUND.src}
            width={1280}
            height={1280}
            alt="FOREGROUND"
            className="w-full "
            draggable={false}
          />
        </div> */}
        <div
          // ref={middleCityParallax.ref}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
          className="relative bottom-[1%] left-0 z-[1]"
        >
          {/* <Image
            src={LAYER2.src}
            width={1280}
            height={1280}
            alt="LAYER2"
            className="w-full "
            draggable={false}
          /> */}
          <Box className=" scale-[0.8] translate-y-[17vmin]">
            <Image
              ref={leftMiddleCityParallax.ref}
              src={LAYER2_LEFT.src}
              width={1280}
              height={1280}
              alt="LAYER2_LEFT"
              className="w-full absolute left-0 top-0"
              draggable={false}
            />
            <Image
              ref={centerMiddleCityParallax.ref}
              src={LAYER2_MID.src}
              width={1280}
              height={1280}
              alt="LAYER2"
              className="w-full absolute left-0 top-0  "
              draggable={false}
            />

            <Image
              ref={rightMiddleCityParallax.ref}
              src={LAYER2_RIGHT.src}
              width={1280}
              height={1280}
              alt="LAYER2"
              className="w-full absolute left-0 top-0"
              draggable={false}
            />
          </Box>
        </div>

        <div
          // ref={topCityParallax.ref}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          className="relative bottom-[7%] left-0 z-[0]"
        >
          {/* <Image
            src={LAYER3_LEFT.src}
            width={1280}
            height={1280}
            alt="LAYER3"
            className="w-full "
            draggable={false}
          /> */}

          <Image
            ref={leftTopCity.ref}
            src={LAYER3_LEFT.src}
            width={1280}
            height={1280}
            alt="LAYER3_LEFT"
            className="w-full absolute left-0 top-0 "
            draggable={false}
          />
          <Image
            ref={rightTopCity.ref}
            src={LAYER3_RIGHT.src}
            width={1280}
            height={1280}
            alt="LAYER3"
            className="w-full absolute left-0 top-0 "
            draggable={false}
          />
        </div>
      </Box>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            properties: [
              {
                startValue: 1,
                endValue: 2.5,
                property: "scale",
              },
              {
                property: "translateY",
                startValue: 150,
                endValue: -100,
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          zIndex: 100,
        }}
        className=""
      >
        <motion.img
          onScroll={{}}
          src={TREE_FOREGROUND.src}
          width={1280}
          height={1280}
          alt="TREE_FOREGROUND"
          className="w-full "
          draggable={false}
        />
      </Plx>
    </Box>
  );
}
