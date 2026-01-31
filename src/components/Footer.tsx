import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import LightRays from "./LightRays";
import { useRef } from "react";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(`footer : ${latest}`);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["0%", "10%", "100%"],
  );
  return (
    <div
      ref={container}
      className="h-screen bg-neutral-900 sticky top-0 flex justify-center items-center col-span-2"
    >
      <motion.div
        style={{
          opacity,
        }}
        className="h-full w-full relative"
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
        <div className="absolute top-1/2 -translate-1/2 left-1/2 ">
          <p className="text-7xl">Get in touch</p>
          <div className="flex gap-3 mt-5 justify-center items-center">
            <p> Instagram</p>
            <p> LinkedIn</p>
            <p> Github</p>
            <p> Gmail</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
