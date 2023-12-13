import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Plx from "react-plx";
import { BG_2, GALAXY } from "@/assets";

export default function Community() {
  return (
    <Box
    sx={{
      height: "200vh",
    }}
    >
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
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
      >
        {/* <Box
          sx={{
            width: "100%",
            height: "100vh",
            background: "#FF7B00",
          }}
        ></Box> */}
        <Image src={GALAXY.src} alt="background" height={1080} width={1920} className="w-full h-full" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <Image src={BG_2.src} alt="background" layout="fill" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        {/* <img
          style={{
            width: "30vw"
          }}
          src="/goonies.png"
          alt="Goonies"
        /> */}
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </Box>
  );
}
