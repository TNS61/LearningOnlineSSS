import { FC, useEffect, useRef } from "react";
import {
  LAYER2_LEFT,
  LAYER2_MID,
  LAYER2_RIGHT,
  TREE_FOREGROUND,
} from "../../../assets";
import {
  useSprings,
  useScroll,
  animated,
  SpringValues,
  useTransition,
  useSpring,
} from "@react-spring/web";

interface TitleLayer2Props {}

const TitleLayer2: FC<TitleLayer2Props> = ({}) => {
  const transitions = useTransition(null, {
    from: { scale: 1 },
    // enter: { opacity: 1 },
    leave: { scale: 2 },
  });

  const [textStyles, textApi] = useSpring(() => ({
    scale: 1,
  }));

  const containerRef = useRef(null!);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log("scrollYProgress112321323", scrollYProgress);
      if (scrollYProgress > 0.7) {
        textApi.start({ scale: 1 });
      } else {
        textApi.start({ scale: 2 });
      }
    },
    default: {
      immediate: true,
    },
  });

  useEffect(() => {
    console.log("scrollYProgressrqwrqwrqwrqw", scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div ref={containerRef}>
      <animated.img
        style={{ scale: scrollYProgress.to((scrollP) => scrollP.toFixed(2)) }}
        src={LAYER2_LEFT.src}
        width={1280}
        height={1280}
        alt="LAYER2_LEFT"
        className="w-full absolute left-0 top-0"
        draggable={false}
      />
      <animated.img
        style={{ scale: scrollYProgress.get() }}
        src={LAYER2_MID.src}
        width={1280}
        height={1280}
        alt="LAYER2"
        className="w-full absolute left-0 top-0"
        draggable={false}
      />
      <animated.img
        style={{ scale: scrollYProgress.get() }}
        src={LAYER2_RIGHT.src}
        width={1280}
        height={1280}
        alt="LAYER2"
        className="w-full absolute left-0 top-0"
        draggable={false}
      />
    </div>
  );
};

export default TitleLayer2;
