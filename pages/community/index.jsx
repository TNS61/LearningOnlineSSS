import {
  BG_COMMUNITY,
  JUNGLE1,
  JUNGLE2,
  JUNGLE3,
  JUNGLE4,
  JUNGLE5,
  LOGO_LAND,
  MAN,
  MOUNTAINS,
} from "@/assets";
import { Box, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Cloud,
  Environment,
  MapControls,
  OrbitControls,
  Sky,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Camera, CameraHelper, PerspectiveCamera } from "three";

export default function community() {
  return (
    <Box
      sx={{
        backgroundColor: "#210002 !important",
        height: "100dvh",
      }}
    >
      <Parallax pages={3} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} factor={1} speed={0.9}>
          <div
            className="animation_layer parallax"
            id="artback"
            style={{
              backgroundImage: `url(${BG_COMMUNITY.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.8}>
          <div
            className="animation_layer parallax"
            id="mountain"
            style={{
              backgroundImage: `url(${MOUNTAINS.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.7}>
          <div
            className="animation_layer parallax"
            id="logoland"
            style={{
              top: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "4rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ชุมชนเข้มแข็ง คนไทยแข็งแรง
            </Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.6}>
          <div
            className="animation_layer parallax"
            id="jungle1"
            style={{
              backgroundImage: `url(${JUNGLE1.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.5}>
          <div
            className="animation_layer parallax"
            id="jungle2"
            style={{
              backgroundImage: `url(${JUNGLE2.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.4}>
          <div
            className="animation_layer parallax"
            id="jungle3"
            style={{
              backgroundImage: `url(${JUNGLE3.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.3}>
          <div
            className="animation_layer parallax"
            id="jungle4"
            style={{
              backgroundImage: `url(${JUNGLE4.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.2}>
          <div
            className="animation_layer parallax"
            id="manonmountain"
            style={{
              backgroundImage: `url(${MAN.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={0.2}>
          <div
            className="animation_layer parallax"
            id="jungle5"
            style={{
              backgroundImage: `url(${JUNGLE5.src})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={2} speed={0.2}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={3} speed={0.2}>
          {/* <City /> */}
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
}

const TextBlock = () => (
  <div id="textblock">
    <div id="textblock-container">
      <h1 id="textblock-title">What is Firewatch?</h1>
      <p id="textblock-content">
        The year is 1989.
        <br />
        <br />
      {`  You are a man named Henry who has retreated from your messy life to work
        as a fire lookout in the Wyoming wilderness. Perched atop a mountain,
        it's your job to find smoke and keep the wilderness safe.`}
        <br />
        <br />
    {`    An especially hot, dry summer has everyone on edge. Your supervisor, a
        woman named Delilah, is available to youat all times over a small,
        handheld radio—and is your only contact with the world you've left
        behind.`}
        <br />
        <br />
      {`  But when something strange draws you out of your lookout tower and into
        the world below, you'll explore a wild and unknown environment, facing
        questions and making interpersonal choices that can build or destroy the
        only meaningful relationship you have.`}
      </p>
    </div>
  </div>
);

// const City = () => {
//   const [modeCamera, setModeCamera] = useState(0);

//   const camera = useRef(null);

//   return (
//     <Box>
//       <Canvas
//         style={{
//           height: "100vh",
//           width: "100vw",
//           position: "absolute",
//           top: "0",
//           left: "0",
//           zIndex: "-1",
//         }}
//       >
//         <Suspense fallback={null}>
//           <Cloud
//             position={[0, 20, -70]}
//             segments={50}
//             bounds={[50, 10, 70]}
//             volume={30}
//           />
//           <Sky sunPosition={[100, 10, 100]} />
//           <ambientLight intensity={3} />
//           <Environment preset="city" background blur={0.5} />

//           <Model />
//           {/* <perspectiveCamera
//             ref={camera}
//             position={[0, 5, 0]}
//             makeDefault={true}
//             zoom={1}
//           /> */}
//           <Controls />
//           {/* <OrbitControls camera={camera.current} /> */}
//         </Suspense>
//       </Canvas>
//     </Box>
//   );
// };

// const Model = () => {
//   const data = useGLTF(
//     "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/city.glb"
//   );

//   return (
//     <mesh scale={1} position={[100, -5, 150]}>
//       <primitive object={data.scene} />
//     </mesh>
//   );
// };

// const Controls = () => {
//   const { camera } = useThree();
//   const cameraLastPosition = useRef({
//     x: camera.position.x,
//     y: camera.position.y,
//   });

//   return (
//     <MapControls
//       onChange={(e) => {
//         const maxX = 90;
//         const minX = -90;
//         const maxY = 90;
//         const minY = -90;
//         const x = e?.target.target.x;
//         const y = e?.target.target.y;

//         if (x < minX || x > maxX) {
//           e?.target.target.setX(x < minX ? minX : maxX);
//           camera.position.setX(cameraLastPosition.current.x);
//         }
//         if (y < minY || y > maxY) {
//           e?.target.target.setY(y < minY ? minY : maxY);
//           camera.position.setY(cameraLastPosition.current.y);
//         }
//         cameraLastPosition.current.x = camera.position.x;
//         cameraLastPosition.current.y = camera.position.y;
//       }}
//       enableDamping={true}
//       maxZoom={50}
//       minZoom={100}
//     />
//   );
// };
