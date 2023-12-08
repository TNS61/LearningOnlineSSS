import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import {
  ARM_LEFT,
  ARM_RIGHT,
  FOREGROUND,
  LAYER2,
  LAYER3,
  TITLE,
} from "@/assets";
import { Box } from "@mui/material";

function TitlePage() {
  const parallaxRef = useRef(null);
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1.5 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "0",
          end: "2000 bottom",
          scrub: true,
          pin: true,
          // scrub: 1,
          // smoothChildTiming: true,
        },
      });
      tl.to(
        layer1.current,
        {
          y: "-500",
        },
        0.2
      );
      tl.to(
        layer2.current,
        {
          y: "-450",
        },
        0.1
      );
      tl.to(
        layer3.current,
        {
          y: "-450",
        },
        0
      );

      tl.to(
        title.current,
        {
          y: "-40%",
          opacity: 1,
        },
       0
      );

      return tl;

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          backgroundColor: "#FFF2C6",
        }}
        className="parallax"
      >
        <img ref={layer1} className="layer1" src={FOREGROUND.src} />
        <img ref={layer2} className="layer2" src={LAYER2.src} />
        <img ref={layer3} className="layer3" src={LAYER3.src} />

        <div ref={title} className="title">
          <Box className="flex justify-center items-center h-full relative">
            <Image
              src={TITLE.src}
              width={512}
              height={512}
              alt="title"
              className="w-[70%] z-20 title-header"
              draggable={false}
            />
            <Image
              src={ARM_LEFT.src}
              width={512}
              height={512}
              alt="title"
              className="w-[35%] absolute bottom-[-23%] left-0 arm-left"
              draggable={false}
            />
            <Image
              src={ARM_RIGHT.src}
              width={512}
              height={512}
              alt="title"
              className="w-[35%] absolute bottom-[-23%]  right-0 arm-right"
              draggable={false}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
