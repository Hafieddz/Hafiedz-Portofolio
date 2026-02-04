import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useState } from "react";
import { project_data, type project_data_type } from "../utils/project-data.ts";
import { ChevronLeft } from "lucide-react";
import Footer from "./Footer.tsx";
import ProjectMobile from "./MobileViewport/ProjectMobile.tsx";

const Project = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [
      0,
      // Project 2
      0.2626680455015512, 0.2863052149505097,
      // Project 3
      0.4052297237405821, 0.42295760082730094,
      // Project 4
      0.5501551189245087, 0.56153050672182,
      // Project 5
      0.6819323386024524, 0.7151721081400503,
    ],
    [
      "0",
      // Project 2
      "-430px",
      "-440px",
      // Project 3
      "-890px",
      "-900px",
      // Project 4
      "-1350px",
      "-1360px",
      // Project 5
      "-1790px",
      "-1800px",
    ],
  );
  return (
    <>
      <div
        ref={container}
        className="hidden xl:block relative font-space-grotesk"
      >
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
                  <p className="w-47.5 select-none">0</p>
                  <div className="w-47 relative select-none">
                    <motion.div
                      className="absolute"
                      style={{
                        top: y,
                      }}
                    >
                      {project_data.map((_, idx) => (
                        <p className="select-none" key={`pn_${idx}`}>
                          {idx + 1}
                        </p>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="bg-neutral-900 sticky top-0">
            {project_data.map((data: project_data_type, idx: number) => (
              <Section
                key={`pp_${idx}`}
                projectData={data}
                index={idx + 1}
                className={`${data.background}`}
                style={{
                  top: data.top,
                }}
              />
            ))}
            {/* Dummy Section */}
            <Section
              index={99}
              className="bg-blue-500 opacity-0"
              style={{
                top: "00px",
              }}
            />
          </div>
          <Footer />
        </div>
      </div>
      <ProjectMobile />
    </>
  );
};

interface SectionProps {
  className?: string;
  style: React.CSSProperties;
  index: number;
  projectData?: project_data_type;
}

const Section = ({ className, style, index, projectData }: SectionProps) => {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      ref={ref}
      style={style}
      className={`sticky h-screen ${className} rounded-l-2xl overflow-hidden`}
    >
      <p className="text-5xl py-7 px-5">
        {projectData?.name !== undefined ? projectData.name : ""}
      </p>
      <div
        style={{
          height: `${90 - (index * 10) / 2}%`,
        }}
        className="grid grid-cols-5 w-full ps-5 "
      >
        <div className="col-span-4 flex flex-col gap-5 pt-4">
          {/* Description */}
          <p>
            {projectData?.description !== undefined
              ? projectData.description
              : ""}
          </p>
          <p className="text-2xl"> Tech Stack : </p>
          <div className="flex gap-3 bg-white w-fit px-5 py-3 rounded-lg items-center ">
            {projectData?.stack &&
              projectData.stackSrc.map((imgSrc, idx: number) => {
                const [isHovered, setIsHovered] = useState(false);

                return (
                  <div key={`pd-${idx}`} className="relative w-fit">
                    <motion.img
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: Number(`${0.4 + (idx - idx * 0.9)}`),
                      }}
                      key={`pds-${idx}`}
                      src={`/assets${imgSrc}`}
                      className="w-7 h-7"
                    />
                    <AnimatePresence mode="wait">
                      {isHovered && (
                        <motion.div
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute bg-white px-3 py-1 rounded-lg -bottom-10 w-fit text-black left-1/2 -translate-x-1/2"
                        >
                          <p className="text-center w-fit text-xs">
                            {projectData.stack[idx]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </div>
        </div>
        <motion.div className="col-span-1 bg-white rounded-l-2xl w-[20%]  h-130 justify-self-end relative">
          <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            animate={{
              x: isHover ? "-90%" : "0",
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
              bounce: 0.5,
            }}
            className="w-240 h-130 bg-white rounded-l-2xl relative "
          >
            <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col">
              <div className="grid grid-cols-4 bg-neutral-200">
                {/* Terminal Button */}
                <div className="w-full h-10 col-span-1  flex items-center gap-2 px-5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                {/* Center */}
                <div className="text-black col-span-2 flex items-center justify-center">
                  <p className="text-sm">{projectData?.name} Preview </p>
                </div>
              </div>
              <div className="w-full bg-black">
                <img
                  src={`/assets${projectData?.imgUrl}`}
                  alt="preview project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Button */}
            <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black border border-black rounded-full -left-4 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: isHover ? 180 : 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="z-50"
              >
                <ChevronLeft />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
