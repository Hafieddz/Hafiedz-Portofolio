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
      className="flex justify-center items-center z-20  bg-neutral-200 text-black py-30 w-full font-space-grotesk gap-30 relative "
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
        className="w-70 h-fit rounded-full relative z-50"
      >
        <img src={photo} alt="" className="object-cover z-50" />
        <div className="w-100 h-100 absolute -bottom-10 -left-15 rounded-full bg-black -z-10 shadow-2xl shadow-black" />
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
        className="flex flex-col gap-5 w-[30%] "
      >
        <p className="text-4xl font-semibold"> About Me </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          reiciendis nostrum alias voluptate natus quis, amet, sit provident
          quibusdam velit totam ullam! Nobis harum iure odio voluptate voluptas
          soluta sapiente error molestiae reiciendis consequatur facere iste
          pariatur, ex doloribus ad cumque necessitatibus temporibus. Asperiores
          maxime omnis quae eos pariatur obcaecati voluptatum ut deleniti soluta
          ipsam suscipit quos sit ex id cum voluptates, laudantium rerum
          exercitationem eligendi animi consequatur placeat? Quibusdam nemo
          alias expedita aliquid magni, eaque sequi sit temporibus, blanditiis
          dignissimos odio. Consectetur amet sit provident laboriosam,
          consequuntur animi quaerat id temporibus. Explicabo perferendis
          dolorum praesentium numquam quod, eveniet laborum?
        </p>
      </motion.div>
      <motion.p
        style={{
          x,
        }}
        className="text-[600px] absolute -z-50 font-light opacity-40 text-transparent [-webkit-text-stroke:3px_black] "
      >
        ABOUT
      </motion.p>
    </div>
  );
};

export default Overview;
