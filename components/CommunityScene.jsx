import { Box } from "@mui/material";
import {
  ArcballControls,
  CameraControls,
  Cloud,
  DeviceOrientationControls,
  Environment,
  FaceControls,
  FirstPersonControls,
  FlyControls,
  Html,
  KeyboardControls,
  MapControls,
  MotionPathControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Sky,
  TrackballControls,
  TransformControls,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import React, { use, useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NoToneMapping, Vector2, Vector3 } from "three";
import * as THREE from "three";

export default function CommunityScene() {
  const [positionCamera, setPositionCamera] = useState([50, 50, 50]);
  const [targetCamera, setTargetCamera] = useState([0, 0, 0]);
  const [zoomCamera, setZoomCamera] = useState(1);

  const onWhellZoomCamera = (e) => {
    setZoomCamera((prev) => {
      if (e.deltaY > 0) {
        if (prev < 0.5) return prev;
        return prev - 0.1;
      }
      if (e.deltaY < 0) {
        if (prev > 1) return prev;
        return prev + 0.1;
      }
    });
  };

  const onTouchZoomCamera = (e) => {
    console.log(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100% !important",
      }}
    >
      <Canvas
        camera={{
          fov: 40,
          position: positionCamera,
        }}
        onWheel={(e) => onWhellZoomCamera(e)}
        onTouchMove={(e) => onTouchZoomCamera(e)}
        style={{
          width: "100%",
          height: "100dvh",
          //   position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <fog attach="fog" args={["#ffffff", 50, 250]} />
        {/* <Sky sunPosition={[100, 20, 100]} /> */}
        <ambientLight intensity={1.25} />
        <ButtonCommunity
          position={[-24, 5, -22]}
          rotation={[0, -2.4, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"http://192.168.1.138:3000/model/button_town.glb"}
          positionY={5}
          timeStart={2}
        />
        <ButtonCommunity
          position={[-70, 10, -5]}
          rotation={[0, -1.8, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"http://192.168.1.138:3000/model/button_School.glb"}
          positionY={10}
          timeStart={0}
        />
        <ButtonCommunity
          position={[10, 15, -55]}
          rotation={[0, -3, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"http://192.168.1.138:3000/model/button_Origanize.glb"}
          positionY={15}
          timeStart={1}
        />
        <Town />
        <Controls zoomCamera={zoomCamera} />
        {/* <Environment preset="sunset" background /> */}
      </Canvas>
    </Box>
  );
}

const ButtonCommunity = ({
  position,
  rotation,
  scale,
  onClick,
  src,
  positionY,
  timeStart,
}) => {
  const router = useRouter();
  const buttonRef = useRef();
  const { scene } = useGLTF(src);

  useFrame(({ clock }) => {
    // animate the up and down motion
    const t = clock.getElapsedTime();
    // delay the start of the animation
    buttonRef.current.position.y =
      Math.sin(t * 2 + timeStart) * 0.5 + positionY;

    // animate the rotation
    // buttonRef.current.rotation.y = Math.sin(t) * 0.1;
  });

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={() => {
        router.push(onClick);
      }}
      ref={buttonRef}
    >
      <primitive object={scene} />
    </group>
  );
};

const Town = () => {
  const townSrc = "http://192.168.1.138:3000/model/REF_PLANE.glb";
  const { scene } = useGLTF(townSrc);

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};

// const Control = ({ zoomCamera }) => {
//   const [mode, setMode] = useState("free");
//   const cameraRef = useRef();
//   const { camera } = useThree();

//   const pivotY = useRef();
//   const lookAtOffset = useRef();
//   const pivotX = useRef();
//   const offset = useRef();

//   // useEffect(() => {
//   //   cameraRef.current.rotatePolarTo(0.5, true);
//   // }, []);

//   useEffect(() => {
//     console.log(zoomCamera);
//     const max = 1.1;
//     const min = 0.40000000000000013;
//     if (zoomCamera == max) {
//       setMode("free");
//     } else {
//       setMode("target");
//     }
//   }, [zoomCamera]);

//   const onPointerDown = (e) => {
//     console.log(e);
//   };

//   useEffect(() => {
//     document.addEventListener("pointerdown", onPointerDown);

//     return () => {
//       document.removeEventListener("pointerdown", onPointerDown);
//     };
//   }, []);

//   return (
//     <>
//       {zoomCamera != 1.1 && zoomCamera != 0.40000000000000013 ? (
//         <>
//           <LookAtTarget />
//           <CameraControls
//             ref={cameraRef}
//             smoothTime={0.5}
//             minDistance={15}
//             maxDistance={60}
//             dragToOffset={false}
//             azimuthRotateSpeed={0}
//             polarRotateSpeed={0}
//           />
//         </>
//       ) : (
//         <MapControls />
//       )}
//     </>
//   );
// };
// const LookAtTarget = () => {
//   const target = useRef();
//   const { camera } = useThree();

//   // Update the camera's lookAt target in the animation loop
//   useFrame(() => {
//     console.log(camera.position);
//     camera.lookAt(target.current.position);
//   });

//   return (
//     <mesh ref={target} position={[0, 10, 0]}>
//       {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
//       <meshBasicMaterial color="red" />
//     </mesh>
//   );
// };

const Controls = ({ zoomCamera }) => {
  const { camera } = useThree();
  const controlsRef = useRef();

  return (
    <MapControls
      ref={controlsRef}
      enableZoom={false}
      enableRotate={false}
      // enablePan={false}
    />
  );
};
