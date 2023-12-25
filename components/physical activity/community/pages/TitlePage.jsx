import { Box } from "@mui/material";
import AOS from "aos";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import {
  ANIMATED_LIFTING_02,
  ANIMATED_LIFTING_04,
  ANIMATED_RUNNING,
  ANIMATE_YOGA,
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  LAYER2_LEFT,
  LAYER2_MID,
  LAYER2_RIGHT,
  LAYER3_LEFT,
  LAYER3_RIGHT,
  TITLE,
  TREE_FOREGROUND_LEFT,
  TREE_FOREGROUND_RIGHT,
} from "../../../../assets";

export default function TitlePage({ className = "" }) {
  const target = React.useRef(null);

  const newTarget = React.useRef(null);

  const [scrollY, setScrollY] = React.useState(0);

  const leftMiddleCityParallax = useParallax({
    speed: 1,
    targetElement: target.current,
    translateX: ["10vw", "-10vw"],
    scale: [1, 1.1, 1.2],
    // disabled: scrollY < 50,
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
  });

  const centerMiddleCityParallax = useParallax({
    speed: 0.2,
    targetElement: target.current,
    // translateY: [20, -20],
    scale: [1, 1.6, 1.7],
    shouldAlwaysCompleteAnimation: true,
    // disabled: scrollY < 50,
    shouldDisableScalingTranslations: true,
  });

  const rightMiddleCityParallax = useParallax({
    speed: 0.1,
    targetElement: target.current,
    translateY: ["0vh", "-10vh"],
    scale: [1, 1.1, 1.2],
    disabled: scrollY < 50,
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
  });

  const leftTopCity = useParallax({
    speed: 0.5,
    targetElement: target.current,
    translateY: ["0vw", "-10vw"],
    shouldDisableScalingTranslations: true,
    shouldAlwaysCompleteAnimation: true,
  });

  const rightTopCity = useParallax({
    speed: 0.5,
    targetElement: target.current,
    startScroll: 0.4,
    translateY: ["0vw", "-10vw"],
    shouldDisableScalingTranslations: true,
    shouldAlwaysCompleteAnimation: true,
  });

  const bottomCityParallax = useParallax({
    speed: 0.5,
    targetElement: target.current,
    // translateX: ["-20vw", "20vw"],
    scale: [1, 1.4, 1.6, 1.7],
    translateY: ["0vw", "10vw"],
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
  });

  const LeftTreeForeground = useParallax({
    speed: 0.5,
    targetElement: target.current,
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
    startScroll: 0.4,
    translateX: ["0vw", "-110vw", "easeOutQuad"],
  });

  const RightTreeForeground = useParallax({
    speed: 1,
    targetElement: target.current,
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
    translateX: ["-10vw", "90vw", "easeOutSine"],
  });

  const titleParallax = useParallax({
    speed: 0.3,
    targetElement: target.current,
    translateY: ["0vw", "-20vw"],
    scale: [1, 1.1, 1.2],
    shouldAlwaysCompleteAnimation: true,
    shouldDisableScalingTranslations: true,
  });

  const exercise_person_01 = useParallax({
    speed: 0.4,
    targetElement: target.current,
    opacity: [0, 1, "easeOutQuint"],
    translateX: ["0vw", "-7vw"],
    shouldAlwaysCompleteAnimation: true,
  });

  const exercise_person_02 = useParallax({
    speed: 0.5,
    targetElement: target.current,
    opacity: [0, 1, "easeOutExpo"],
    translateY: ["0vw", "-4vw"],
    shouldAlwaysCompleteAnimation: true,
  });

  const exercise_person_03 = useParallax({
    speed: 1,
    targetElement: target.current,
    opacity: [0, 1, "easeOutCirc"],
    translateX: ["0vw", "10vw"],
    shouldAlwaysCompleteAnimation: true,
  });

  const exercise_person_04 = useParallax({
    speed: 0.6,
    targetElement: target.current,
    opacity: [0, 1, "easeOutBack"],
    translateX: ["0vw", "10vw"],
    shouldAlwaysCompleteAnimation: true,
  });

  const onScroll = useCallback((event) => {
    console.log("left middle city parrallax", leftMiddleCityParallax);
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
    console.log("scrollY" + scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
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
          // position: scrollY > 500 ? "relative" : "fixed",
          position: "relative",
        }}
        className={("overflow-hidden", className)}
      >
        {/* ส่วนชื่อ */}
        <Box
          ref={titleParallax.ref}
          // data-aos="fade-up"
          // data-aos-duration="2000"
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
          <div
            ref={bottomCityParallax.ref}
            // data-aos="fade-up"
            // data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
            className="absolute bottom-[3%] left-0 z-[3]"
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
            // ref={middleCityParallax.ref}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
            className="relative bottom-[1%] left-0 z-[2]"
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

          {/* คนออกกำลังกาย */}
          <div
            // ref={middleCityParallax.ref}
            className="relative bottom-[1%] left-0 z-[1] w-full"
          >
            {/* <Image
            src={LAYER2.src}
            width={1280}
            height={1280}
            alt="LAYER2"
            className="w-full "
            draggable={false}
          /> */}
            <Box className="relative scale-[0.8] translate-y-[45vmin] w-full flex justify-between">
              <Image
                ref={exercise_person_01.ref}
                src={ANIMATED_LIFTING_02.src}
                width={1280}
                height={1280}
                alt="ANIMATED_LIFTING_02"
                className="w-[400px] absolute -left-[5vw] top-0"
                draggable={false}
              />
              <Image
                ref={exercise_person_02.ref}
                src={ANIMATE_YOGA.src}
                width={1280}
                height={1280}
                alt="ANIMATE_YOGA"
                className="w-[400px] absolute left-[33%] top-[45%] "
                draggable={false}
              />

              <Image
                ref={exercise_person_03.ref}
                src={ANIMATED_LIFTING_04.src}
                width={1280}
                height={1280}
                alt="LAYER2"
                className="w-[400px] absolute right-[15%] -top-[1vh]"
                draggable={false}
              />

              <Image
                ref={exercise_person_04.ref}
                src={ANIMATED_RUNNING.src}
                width={1280}
                height={1280}
                alt="LAYER2"
                className="w-[400px] absolute right-[-7%] -top-[6vh]"
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
        {/* <Plx
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
                startValue: 0,
                endValue: -100,
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
        className=""
      >
        <motion.img
          src={TREE_FOREGROUND.src}
          width={1280}
          height={1280}
          alt="TREE_FOREGROUND"
          className="w-full "
          draggable={false}
        />
      </Plx> */}
        <div
          ref={newTarget}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          className="fixed bottom-[0%] right-0 z-[10] w-full  h-5/6 "
        >
          <Image
            ref={LeftTreeForeground.ref}
            src={TREE_FOREGROUND_LEFT.src}
            width={1280}
            height={1280}
            alt="TREE_FOREGROUND_LEFT"
            className=" right-0"
            draggable={false}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          className="fixed bottom-[0%] left-[50%] z-[10] w-2/3 h-3/4  "
        >
          <Image
            ref={RightTreeForeground.ref}
            src={TREE_FOREGROUND_RIGHT.src}
            width={1280}
            height={1280}
            alt="TREE_FOREGROUND_LEFT"
            className="w- right-0"
            draggable={false}
          />
        </div>
        {/* <Image
        src={TREE_FOREGROUND_RIGHT.src}
        width={1280}
        height={1280}
        alt="TREE_FOREGROUND"
        className="w-full "
        draggable={false}
      /> */}
      </Box>
    </Box>
  );
}
