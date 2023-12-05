import { BG_2, BG_MAP } from "@/assets";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import Plx from "react-plx";

const exampleParallaxData2 = [
    {
        start: "400vh",
        end: "500vh",
        properties: [
            {
                startValue: 0,
                endValue: -100,
                unit: "vh",
                property: "translateY"
            },
            {
                property: "opacity",
                startValue: 0.5,
                endValue: 1
            }
        ]
    },
    {
        start: "600vh",
        end: "700vh",
        properties: [
            {
                startValue: -100,
                endValue: 0,
                unit: "vh",
                property: "translateY"
            },
            {
                property: "opacity",
                startValue: 1,
                endValue: 0.5
            }
        ]
    }
];

const exampleParallaxData = [
    {
        start: "0vh",
        end: "100vh",
        properties: [
            {
                property: "opacity",
                startValue: 0,
                endValue: 1
            }
        ]
    },
    {
        start: "200vh",
        end: "300vh",
        properties: [
            {
                property: "opacity",
                startValue: 1,
                endValue: 0
            }
        ]
    }
];

const plxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 40,
    color: "#111",
    fontFamily: "sans-serif",
    position: "fixed",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    boxSizing: "border-box",
    opacity: 0,
    // backdropFilter: "blur(15px)",
    backgroundColor: "rgba(255,255,255,0.3)",
    top: 0
};

const backgroundStyles = {
    height: "200vh",

};

const background2styles = {
    height: "400vh",
    background:
        `url(${BG_MAP.src}) no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
};

const wrapperStyles = {
    position: "relative",
    overflow: "hidden"
};

export default function Community() {
    return (
        <div style={{ height: "1000vh" }}>
            <div style={wrapperStyles}>
                <div style={backgroundStyles} />
                <Plx
                    parallaxData={[
                        {
                            start: "0vh",
                            end: "150vh",
                            easing: "ease-in",
                            properties: [
                                {
                                    startValue: 1.2,
                                    endValue: 1.6,
                                    property: "scale"
                                },
                                {
                                    property: "opacity",
                                    startValue: 1,
                                    endValue: 0
                                }
                            ]
                        }
                    ]}
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",
                        zIndex: 100,
                        height: "100vh",
                    }}
                >
                    <Image src={BG_2.src} alt="background" width={1080} height={1080} className='w-full grayscale' />
                </Plx>
                <Plx
                    parallaxData={[
                        {
                            start: "0vh",
                            end: "150vh",
                            properties: [
                                {
                                    startValue: 1,
                                    endValue: 2,
                                    property: "scale"


                                },
                                {
                                    property: "opacity",
                                    startValue: 1,
                                    endValue: 0
                                }
                            ]
                        }
                    ]}
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",

                        height: "100vh",
                    }}
                    className='flex flex-col justify-center items-center'
                >
                    <Typography
                        sx={{
                            fontSize: '3rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        ชุมชนเข้มแข็ง
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '3rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        คนไทยแข็งแรง
                    </Typography>
                </Plx>
            </div>
            <div style={wrapperStyles}>
                <div style={background2styles} />
                {/* <Plx parallaxData={exampleParallaxData2} style={plxStyles}>
        <h1>More energy. Higher performance.</h1>
      </Plx> */}
            </div>
        </div>

    )
}


