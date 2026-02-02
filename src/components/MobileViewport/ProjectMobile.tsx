import { project_data, type project_data_type } from "@/utils/project-data";
import Footer from "../Footer";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import PreviewProject from "./S_Project/PreviewProject";

const PROJECTS = project_data;

const ProjectMobile = () => {
  return (
    <div className="xl:hidden bg-neutral-900 text-center relative">
      <div className="sticky top-0 z-20 py-2">
        <p className="text-7xl font-fjalla-one "> PROJECT</p>
        <p className="font-space-grotesk mt-5">
          My Project in Web Development so far :
        </p>
      </div>
      <div className="relative h-[80%]">
        <div className="p-2 w-full sticky top-20 z-10">
          {PROJECTS.map((project, idx) => {
            return (
              <SectionMobile
                key={`pb-${idx}`}
                className={project.background}
                data={project}
              />
            );
          })}
          <SectionMobile className="bg-neutral-900" />
        </div>
        <div className="h-screen bg-neutral-900 z-30 top-0 sticky">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const SectionMobile = ({
  className,
  data,
}: {
  className: string;
  data?: project_data_type;
}) => {

  return (
    <div className={`h-dvh sticky top-48 font-space-grotesk`}>
      <div
        id="project-container"
        className={`${className} h-[78%] rounded-lg py-2 px-2 relative`}
      >
        <PreviewProject imgSrc={data?.imgUrl} name={data?.name} />
        <p className="text-lg"> {data?.name}</p>
        <p className="text-sm text-start mt-3">{data?.description}</p>
        <p className="text-start mt-5 mb-3"> Tech Stack : </p>
        <div className="flex gap-3 bg-white w-fit px-5 py-3 rounded-lg items-center -z-10 ">
          {data?.stack &&
            data.stackSrc.map((imgSrc, idx: number) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <div className="relative w-fit z-0">
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
                          {data.stack[idx]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
