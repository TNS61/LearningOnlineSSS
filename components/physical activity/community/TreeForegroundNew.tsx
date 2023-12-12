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

interface TreeForegroundNewProps {
  className?: string;
}

const TreeForegroundNew: FC<TreeForegroundNewProps> = ({ className }) => {
  const { scrollY } = useScroll();

  return (
        <Image
          src={TREE_FOREGROUND.src}
          width={1280}
          height={1280}
          alt="TREE_FOREGROUND"
          className="w-full z-50 bg-red-500"
          draggable={false}
        />
  );
};

export default TreeForegroundNew;
