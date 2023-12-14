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
            textureUrls={"http://localhost:3000/images/JUMP.png"}
            anim={"http://localhost:3000/animation/JUMP.json"}
          /> */}
        </group>
        {/* <Npc src={"http://localhost:3000/images/bicycle.png"} /> */}

        <SpriteAnimJump
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/JUMP.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/JUMP.json"}
        />
        <SpriteAnimBicycle
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/bicycle.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/bicycle.json"}
        />
        <SpriteAnimCat
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/cat.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/cat.json"}
        />

        <SpriteAnimChicken
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/chicken.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/chicken.json"}
          position={[-20, 1, 20]}
        />
        <SpriteAnimChicken
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/chicken.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/chicken.json"}
          position={[10, 1, 20]}
        />
        <SpriteAnimCiga
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/ciga.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/ciga.json"}
          position={[10, 3, -48]}
        />
        <SpriteAnimDuck
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/duck.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/duck.json"}
          position={[-17, 2.5, -5]}
        />
        <SpriteAnimDuck
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/duck.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/duck.json"}
          position={[-38, 2.5, -8]}
        />
        <SpriteAnimHappy
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/h.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/h.json"}
          position={[-69, 2.5, -8]}
        />
        <SpriteAnimMajor
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/major.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/major.json"}
          position={[-4, 2.5, 7]}
        />
        <SpriteAnimMuaythai
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/muaythai.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/muaythai.json"}
          position={[-69, 2.5, 14]}
        />
        <SpriteAnimMuaythai
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/muaythai.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/muaythai.json"}
          position={[-20, 2.5, -28]}
        />
        <SpriteAnimPolice
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/police.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/police.json"}
          position={[16, 2.5, 20]}
        />
        <SpriteAnimRun
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/run.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/run.json"}
          position={[-54, 1.9, -10]}
        />
        <SpriteAnimSing
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/sing.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/sing.json"}
          position={[-10, 1.9, -9]}
        />
        <SpriteAnimYoga
          textureUrls={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/images/yoga.png"}
          anim={"https://www.gforcesolution.com/app/2023/LearningOnlineSSS/animation/yoga.json"}
          position={[-2, 1.9, -20]}
        />
<AnimationModel />
        <Controls zoomCamera={zoomCamera} positionCamera={positionCamera} />
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
        e?.target.target.setX(x < minX ? minX : maxX);
        camera.position.setX(cameraLastPosition.current.x);
      }

      if (z < -40 || z > 10) {
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

const SpriteAnimJump = ({ textureUrls, anim }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    animRef.current.position.y = Math.sin(time * 10) * 0.2;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={4}
        position={[7, 2, -20]}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
      />
    </group>
  );
};
const SpriteAnimBicycle = ({ textureUrls, anim }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    animRef.current.position.z = Math.sin(time) * 5;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={[19.5, 1.8, -10]}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimCat = ({ textureUrls, anim }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    animRef.current.position.x = Math.sin(time) * 1;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={2.5}
        position={[-24, 1, 2]}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimChicken = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();
  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={2}
        position={position}
        fps={7}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimCiga = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.5;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimDuck = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.5;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={5}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimHappy = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    animRef.current.position.y = Math.sin(time *7) * 0.2;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={1.5}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimMajor = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={2}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimMuaythai = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={2}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimPolice = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    // animRef.current.position.z = Math.sin(time) * 1;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimRun = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    animRef.current.position.z = Math.sin(time) * 3;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimSing = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    animRef.current.position.x = Math.sin(time) * 3;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};
const SpriteAnimYoga = ({ textureUrls, anim, position, start }) => {
  const animRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // animRef.current.position.y = Math.sin(time *7) * 0.2;
    // animRef.current.position.x = Math.sin(time) * 3;
  });

  return (
    <group ref={animRef}>
      <SpriteAnimator
        scale={3}
        position={position}
        fps={3}
        autoPlay={true}
        loop={true}
        alphaTest={0.01}
        textureImageURL={textureUrls}
        textureDataURL={anim}
        scaleFactor={0.125}
      />
    </group>
  );
};

const AnimationModel = () => {
  const modelSrc = "https://www.gforcesolution.com/app/2023/LearningOnlineSSS/model/character_town_02.glb";
  const { scene, animations } = useGLTF(modelSrc);

  const [mixer] = useState(() => new THREE.AnimationMixer(scene));

  useEffect(() => {
    const action = mixer.clipAction(animations[0]);
    action.play();
  }, [mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
