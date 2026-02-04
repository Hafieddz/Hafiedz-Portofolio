import { useRef } from "react";
import photo from "../assets/body_photo.webp";
import { motion, useScroll, useTransform } from "motion/react";

const Overview = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100", "100%"]);

  return (
    <div
      ref={ref}
      id="overview"
      className="flex flex-col xl:flex-row justify-center items-center z-20 bg-neutral-200 text-black  py-10 lg:py-30 w-full font-space-grotesk gap-15 lg:gap-30 relative "
    >
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          bounce: 0.5,
          repeat: 0,
          ease: "easeInOut",
        }}
        className="w-35 md:w-70 h-fit rounded-full relative z-50"
      >
        <img src={photo} alt="" className="object-cover z-50" />
        <div className="w-65 h-70 md:w-100 md:h-100 absolute -bottom-10 -left-15 rounded-full bg-black -z-10 shadow-2xl shadow-black" />
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          bounce: 0.5,
          repeat: 0,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 px-5  xl:w-[30%] "
      >
        <p className="text-2xl md:text-4xl font-semibold"> About Me </p>
        <p className="text-sm md:text-base">
          i'm a Fullstack Web Developer with experience in React, NextJS, Express, NestJS
        </p>
      </motion.div>
      <motion.p
        style={{
          x,
        }}
        className="text-[400px] md:text-[600px] absolute -z-50 font-light opacity-40 text-transparent [-webkit-text-stroke:3px_black] "
      >
        ABOUT
      </motion.p>
    </div>
  );
};

export default Overview;
