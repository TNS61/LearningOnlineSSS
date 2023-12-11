import Image from "next/image";
import Plx from "react-plx";
import {
  LAYER2_LEFT,
  LAYER2_MID,
  LAYER2_RIGHT,
  TREE_FOREGROUND,
} from "../../../assets";
import { Box } from "@mui/material";
import { FC } from "react";
import { useScroll } from "@react-spring/web";

interface TreeForegroundProps {
  className?: string;
}

const TreeForeground: FC<TreeForegroundProps> = ({ className }) => {
  const { scrollY } = useScroll();

  return (
    <Box
      sx={{
        height: "100dvh",
        position: "relative",
      }}
      className="overflow-x-hidden z-50"
    >
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale",
              },
              {
                property: "translateY",
                startValue: -0,
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
        <Image
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
};

export default TreeForeground;
