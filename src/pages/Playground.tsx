import { animate, motion, useScroll, useTransform } from "motion/react";
import profile from "../../public/my_photo.png";
import { useRef } from "react";

const Playground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgContainerY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-50"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  return (
    <div>
      <div ref={ref} className="grid place-items-center w-full h-screen relative">
        <div className="flex gap-10 justify-center items-center">
          <motion.div
            style={{
              y: imgContainerY,
            }}
            className="w-60 h-60 rounded-md border border-white overflow-hidden bg-white "
          >
            <motion.img
              style={{
                y: imgY,
              }}
              src={profile}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{
              y: textY,
            }}
            className="flex flex-col gap-5"
          >
            <p className="text-5xl"> Hafiedz Hasmy Hamid</p>
            <p className="w-[50%] text-sm">
              {" "}
              Fresh graduate Information System from Universitas Hasanuddin and
              focusing on Full Stack Web Development.{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure
          corporis quae, quam aliquid consequuntur rerum doloribus quisquam
          architecto accusamus?
        </p>
      </div>
    </div>
  );
};

export default Playground;
