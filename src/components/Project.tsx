import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

const Project = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(`Container : ${latest}`);
  });

  const y = useTransform(
    scrollYProgress,
    [
      0,
      // Project 1
      0.3, 0.38,
      // Project 2
      0.387, 0.495,
      // Project 3
      0.54, 0.55,
    ],
    ["0", "-10px", "-440px", "-450px", "-460px", "-890px", "-900px"],
  );
  return (
    <div ref={container} className="relative font-space-grotesk">
      <div className="grid grid-cols-2 relative">
        {/* Left */}
        <div className="bg-neutral-900 h-screen sticky top-0 pt-10 ">
          <div className="relative h-full w-full flex flex-col items-center gap-5">
            <p className="text-9xl font-fjalla-one"> PROJECT </p>
            <p className="font-light">
              My Projects in Web Development so far :
            </p>
            <div className="absolute bottom-0 right-20 text-[300px] p-0 m-0 overflow-hidden ">
              <div className="flex gap-5 opacity-30 text-transparent [-webkit-text-stroke:4px_white]">
                <p className="w-47.5">0</p>
                <div className="w-47 relative">
                  <motion.div
                    className="absolute"
                    style={{
                      top: y,
                    }}
                  >
                    <p className="">1</p>
                    <p className="">2</p>
                    <p className="">3</p>
                  </motion.div>
                </div>
              </div>
              {/* <div className="flex flex-col gap-5 relative">
                {NUMBERS.map((num, index) => {
                  const top = index * 140;
                  return (
                    <div
                      className={``}
                      style={{
                        top: top,
                      }}
                    >
                      {num}
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="bg-neutral-900 sticky top-0">
          <Section
            index={1}
            className="bg-red-500"
            style={{
              top: "0px",
            }}
          />
          <Section
            index={2}
            className="bg-amber-500"
            style={{
              top: "100px",
            }}
          />
          <Section
            index={3}
            className="bg-violet-500"
            style={{
              top: "200px",
            }}
          />
          <Section
            index={4}
            className="bg-blue-500 opacity-0"
            style={{
              top: "00px",
            }}
          />
        </div>
        <div className="h-screen bg-slate-900 sticky top-0 flex justify-center items-center col-span-2">
          <p className="text-5xl">Closing Content</p>
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  className?: string;
  style: React.CSSProperties;
  index: number;
}

const Section = ({ className, style, index }: SectionProps) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={style}
      className={`sticky  h-screen ${className} rounded-l-2xl`}
    >
      <p className="text-5xl pt-6 px-5"> Project Title</p>
    </div>
  );
};

export default Project;
