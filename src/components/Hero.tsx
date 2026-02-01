import { useRef } from "react";
import profile from "../assets/my_photo.webp";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
  const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "150%"]);

  return (
    <div
      ref={ref}
      className="h-screen grid place-items-center font-space-grotesk gap-1 relative -z-10"
    >
      <motion.div
        style={{
          opacity,
          y,
        }}
        className="flex flex-col gap-10 items-center"
      >
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.8,
          }}
          className="w-40 h-40 md:w-25 md:h-25  lg:w-50 lg:h-50 relative"
        >
          <div className="w-full h-full overflow-hidden bg-white rounded-full">
            <motion.img
              src={profile}
              alt="profile image"
              className="object-cover"
            />
          </div>
          {/* <div className="w-50 h-50 absolute inset-0 bg-white blur-md -z-50 rounded-full"></div> */}
        </motion.div>
        <motion.p
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.8,
          }}
          className="text-xl lg:text-4xl w-[65%] text-center lg:leading-12 text-neutral-400"
        >
          I'm
          <span className="ps-1.5 text-white">Hafiedz</span>, Fresh Graduate
          Information System from Hasanuddin University
        </motion.p>
        <motion.p
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.8,
          }}
          className="w-fit"
        >
          {" "}
          Fullstack Web Development Enthusiast{" "}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
