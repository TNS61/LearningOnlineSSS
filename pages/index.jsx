import {
  BTN_1,
  BTN_1_EN,
  BTN_2,
  BTN_2_EN,
  BTN_3,
  BTN_3_EN,
  BTN_4,
  BTN_4_EN,
  BTN_5,
  BTN_5_EN,
  BTN_6,
  BTN_6_EN,
  BTN_7,
  BTN_7_EN,
  BTN_8,
  BTN_8_EN,
} from "@/assets";
import Bar from "@/components/Bar";
import CommunityScene from "@/components/CommunityScene";
import AppWrapper from "@/components/hoc/AppWrapper";
import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import PanoramaIcon from "@mui/icons-material/Panorama";
export default function Home() {
  const router = useRouter();

  const buttonMenu = [
    {
      id: 1,
      th: BTN_1.src,
      en: BTN_1_EN.src,
    },
    {
      id: 2,
      th: BTN_2.src,
      en: BTN_2_EN.src,
    },
    {
      id: 3,
      th: BTN_3.src,
      en: BTN_3_EN.src,
    },
    {
      id: 4,
      th: BTN_4.src,
      en: BTN_4_EN.src,
    },
    {
      id: 5,
      th: BTN_5.src,
      en: BTN_5_EN.src,
    },
    {
      id: 6,
      th: BTN_6.src,
      en: BTN_6_EN.src,
    },
    {
      id: 7,
      th: BTN_7.src,
      en: BTN_7_EN.src,
    },
    {
      id: 8,
      th: BTN_8.src,
      en: BTN_8_EN.src,
    },
  ];

  const [title, setTitle] = useState(3);
  const [mode, setMode] = useState("2d");

  return (
    <AppWrapper>
      <Bar />

      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* <Image
          src={LOGO.src}
          width={512}
          height={512}
          alt="logo"
          draggable={false}
          className="w-[20%] h-auto object-contain absolute top-[20%]  lg:top-[12%] left-[50%] translate-x-[-50%]"
        />
        <Image
          src={BG_HOME.src}
          width={512}
          height={512}
          alt="logo"
          className="h-[400px] w-auto  lg:h-auto lg:w-full  object-cover"
          draggable={false}
        /> */}
        <video
          playsInline
          muted
          autoPlay
          loop
          className="w-full h-full object-cover z-50"
        >
          <source
            src="https://www.gforcesolution.com/app/2023/LearningOnlineSSS/Home_01.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box
        sx={{
          width: "100% !important",
          // height: '100dvh !important',
        }}
      >
        <Box className="flex flex-wrap justify-center items-center pt-16">
          {buttonMenu.map((item, index) => {
            return (
              <button
                key={index}
                variant="text"
                sx={{
                  p: "0 !important",
                  maxWidth: "0 !important",
                  minWidth: "45px !important",
                }}
                // onClick={() => setTitle(item.id)}
              >
                <Image
                  src={item.th}
                  width={16}
                  height={16}
                  alt="IC_TH"
                  className={`h-20 w-auto object-contain ${
                    !title
                      ? "grayscale-0"
                      : title === item.id
                      ? "grayscale-0"
                      : "grayscale"
                  } duration-500`}
                  draggable={false}
                />
              </button>
            );
          })}
        </Box>

        <Box className="pt-5">
          <Box
            sx={{
              position: "relative",
            }}
          >
            <CommunityScene />
            {/* <IconButton
              sx={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: "1000",
                p: "5 !important",
                backgroundColor: "#fff !important",
              }}
              className="duration-500"
            >
              {mode == "2d" ? (
                <PanoramaIcon onClick={() => setMode("3d")} fontSize="large" />
              ) : (
                <ThreeDRotationIcon
                  onClick={() => setMode("2d")}
                  fontSize="large"
                />
              )}
            </IconButton> */}
          </Box>

          {/* <Image src={BG_MAP.src} width={512} height={512} alt='logo' className={`h-auto w-full object-cover ${title == 3 ? 'grayscale-0' : 'grayscale'} duration-500`} draggable={false} />
          {
            title == 3 && <>
              <button
                onClick={() =>
                  router.push("/physical-activity/community/#home")
                }
              >
                <Image
                  src={PIN_COMMUNITY.src}
                  width={512}
                  height={512}
                  alt="logo"
                  className="h-24 w-auto object-contain absolute top-[55%] left-[20%] animate-bounce "
                  draggable={false}
                />
              </button>
            </>
          } */}
        </Box>
      </Box>
    </AppWrapper>
  );
}
