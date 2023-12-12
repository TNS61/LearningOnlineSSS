import { Box, Button } from "@mui/material";
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
  Image,
  KeyboardControls,
  MapControls,
  MotionPathControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Sky,
  SpriteAnimator,
  TrackballControls,
  TransformControls,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";
import React, { use, useCallback, useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NoToneMapping, Vector2, Vector3 } from "three";
import * as THREE from "three";

export default function CommunityScene() {
  const [positionCamera, setPositionCamera] = useState([50, 50, 50]);

  const [zoomCamera, setZoomCamera] = useState(1);
  const [cameraMode, setCameraMode] = useState("top");

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

  const handleChangeCameraMode = () => {
    if (cameraMode == "top") {
      setCameraMode("free");
      setPositionCamera([0, 50, 0]);
    } else {
      setCameraMode("top");
      setPositionCamera([50, 50, 50]);
    }
  };

  const onTouchZoomCamera = (e) => {
    console.log(e.touches[0].clientX, e.touches[0].clientY);
  };

  // const textureUrls = [
  //   "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/g1.png",
  //   "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/g.png",
  // ];
  const frameCount = 3;
  const frameRate = 30;

  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100% !important",
      }}
    >
      {/* <Button
        onClick={() => {
          handleChangeCameraMode();
        }}
      >
        เปลี่ยนมุมมอง
      </Button> */}
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
        {/* <Cloud concentrate="random" growth={10} color="#ffffff" opacity={1.25} seed={0.3} bounds={100} volume={10} position={[0, 10, 0]} /> */}
        {/* <Sky sunPosition={[100, 20, 100]} /> */}
        <ambientLight intensity={1.25} />
        <ButtonCommunity
          position={[-24, 5, -22]}
          rotation={[0, -2.4, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/button_town.glb"}
          positionY={5}
          timeStart={2}
        />
        <ButtonCommunity
          position={[-70, 10, -5]}
          rotation={[0, -1.8, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/button_School.glb"}
          positionY={10}
          timeStart={0}
        />
        <ButtonCommunity
          position={[10, 15, -55]}
          rotation={[0, -3, 0]}
          scale={10}
          onClick={"/physical-activity/community"}
          src={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/button_Origanize.glb"}
          positionY={15}
          timeStart={1}
        />
        <Town />
        <group rotation={[0, 0, 0]}>
          {/* <AnimationModel/> */}
          {/* <SpriteAnim
            textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/JUMP.png"}
            anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/JUMP.json"}
          /> */}
        </group>
        {/* <Npc src={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/bicycle.png"} /> */}
        <Controls zoomCamera={zoomCamera} positionCamera={positionCamera} />
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
  const townSrc = "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/REF_PLANE.glb";
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

const Controls = ({ zoomCamera, positionCamera }) => {
  const controlsRef = useRef();
  const { camera, size } = useThree();
  const cameraLastPosition = useRef({
    x: camera.position.x,
    y: camera.position.y,
  });

  const limitPanningDistance = useCallback(
    (e) => {
      const maxX = 43;
      const minX = -70;

      const maxZ = 15;
      const minZ = -15;

      const x = e?.target.target.x;
      const y = e?.target.target.y;
      const z = e?.target.target.z;

      if (x < minX || x > maxX) {
        console.log(x);
        e?.target.target.setX(x < minX ? minX : maxX);
        camera.position.setX(cameraLastPosition.current.x);
      }

      if (z < -40 || z > 10) {
        console.log(z);
        e?.target.target.setZ(z < -40 ? -40 : 10);
        camera.position.setZ(cameraLastPosition.current.z);
      }

      cameraLastPosition.current.x = camera.position.x;
      cameraLastPosition.current.y = camera.position.y;
      cameraLastPosition.current.z = camera.position.z;
    },
    [camera.zoom, size]
  );

  useEffect(() => {}, [zoomCamera]);

  useEffect(() => {
    camera.position.set(
      positionCamera[0],
      positionCamera[1],
      positionCamera[2]
    );
    camera.lookAt(
      cameraLastPosition.current.x,
      cameraLastPosition.current.y,
      cameraLastPosition.current.z
    );
  }, [positionCamera]);

  useFrame(({ clock }) => {
    //  const t = clock.getElapsedTime();
    //   const x = Math.sin(t * 2 + 2) * 0.5 + 50;
    //   const y = Math.sin(t * 2 + 2) * 0.5 + 50;
    //   const z = Math.sin(t * 2 + 2) * 0.5 + 50;
    //   camera.position.set(x, y, z);
  });

  return (
    // <MapControls
    //   ref={controlsRef}
    //   enableZoom={false}
    //   enableRotate={false}

    //   // enablePan={false}
    // />
    <MapControls
      enableRotate={false}
      enableZoom={false}
      onChange={(e) => {
        // console.log(e?.target);
        limitPanningDistance(e);
      }}
      makeDefault
    />
  );
};

// const SpriteAnim = ({ textureUrls, frameCount, frameRate }) => {
//   const spriteRef = useRef();
//   const textureArray = useMemo(() => {
//     console.log(textureUrls);
//     return textureUrls.map((url) => new THREE.TextureLoader().load(url));
//   }, [textureUrls]);

//   const currentFrame = useRef(0);
//   const frameTime = 1 / frameRate;

//   useFrame(() => {
//     currentFrame.current += frameTime;
//     const currentFrameIndex = Math.floor(currentFrame.current) % frameCount;
//     spriteRef.current.material.map = textureArray[currentFrameIndex];
//     spriteRef.current.position.x = Math.sin(currentFrame.current) * 3;
//     spriteRef.current.rotation.x = Math.sin(currentFrame.current) * 0.5;
//   });

//   return (
//     <sprite ref={spriteRef} position={[0, 2.5, 25]} scale={[5, 5, 5]}>
//       <spriteMaterial map={textureArray[0]} />
//     </sprite>
//   );
// };

const SpriteAnim = ({ textureUrls, anim }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    animRef.current.position.x = Math.sin(time) * 10;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={[5, 5, 5]}
        position={[0, 2.5, 25]}
        // onLoopEnd={onEnd}
        // frameName={"celebration"}
        fps={5}
        // animationNames={['celebration']}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
      />
    </group>
  );
};

const AnimationModel = () => {
  const modelSrc = "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/character_town.glb";
  const { scene ,animations} = useGLTF(modelSrc);

  const [mixer] = useState(() => new THREE.AnimationMixer(scene));

  useEffect(() => {
    const action = mixer.clipAction(animations[0]);
    action.play();
  }
  , [mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  }
  );

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
}