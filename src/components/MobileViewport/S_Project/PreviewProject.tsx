import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface PreviewProjectProps {
  name?: string;
  imgSrc?: string;
}

const PreviewProject = ({ name, imgSrc }: PreviewProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute bottom-3 sm:bottom-30 md:bottom-40 w-[97%] h-[8%] left-1/2 -translate-x-1/2 rounded-t-lg z-10">
      <motion.div
        animate={{
          top: isOpen ? "-175px" : "0px",
        }}
        className="absolute bg-neutral-200 h-50 w-full z-40 rounded-t-lg"
      >
        {/* Button */}
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          className="relative"
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute -top-3 bg-white border border-black  w-7 h-7 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center z-50"
          >
            <ChevronUp size={16} className="text-black" />
          </button>
        </motion.div>
        {/* Project Image */}
        <p className="text-xs py-4 text-black"> {name} Preview</p>
        <img src={`/assets${imgSrc}`} alt="project image" className="w-full" />
      </motion.div>
    </div>
  );
};

export default PreviewProject;
