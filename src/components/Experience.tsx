import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { MapPin } from "lucide-react";

const datas = [
  {
    title: "Started Information Systems Degree",
    date: "August 2021",
    location: "Universitas Hasanuddin",
    description: `This is the start of my journey of learning Web Development. *Notes : Not only web development, i learned programming language (Java, Python, PHP, Javascript) and fundamental of programming like OOP (Object Oriented Programming), SQL / NoSQL, Web and Mobile Development.`,
  },
  {
    title: "Fullstack Developer at Fatin Cake",
    date: "October 2023 - December 2023",
    location: "Barru, South Sulawesi, Indonesia",
    description:
      "My first 'real' project with real human. I created a simple e-commerce web to complete my final project. Tech im using on this project is Flask as Fullstack Framework, and MySQL as Database Management.",
  },
  {
    title: "Fullstack Web Development Program",
    date: "February 2024 - June 2024",
    location: "Binar Academy",
    description:
      "This is where i learned a lot about Fullstack Web Development, Thanks to my mentor, Mr. Imam Taufiq Ramadhan. I learnt how to create an API, Managing Fullstack Project (React and Express), PostgreSQL / MongoDB, and contribute in my final capstone project in this program. We created an Web-Based Flight Ticket Management named SkyPass.",
  },
  {
    title: "Data Scientist Associate Certification",
    date: "October 2024",
    location: "Digital Talent Scholarship",
    description:
      "I know this seems out-of-the-box. So in this program, i learnt about how to become an Data Scientist Associate using RapidMiner. I created some of simple machine learning model like house price prediction with regression, and fraud credit card detection with classification. I also completed a test to obtain an DSA degree.",
  },
  {
    title: "Graduated with Information Systems Degree",
    date: "December 2025",
    location: "Universitas Hasanuddin",
    description:
      "Finally, i completed my college with excellent GPA (3.66 from 4). Now i can use the S.Kom degree in my name :3",
  },
  {
    title: "Open for Oppurtunities",
    date: "December 2025 - Present",
    location: "Unknown",
    description:
      "So after graduated from Universitas Hasanuddin, i'm ready to contribute to innovative projects and grow with dynamic team. Let's build something great together! ",
  },
];

const Experience = () => {
  const targetContainer = useRef(null);

  return (
    <div className="min-h-[200vh] flex flex-col py-30 px-30 font-space-grotesk font-light bg-neutral-900 -z-10">
      <div ref={targetContainer} className="pb-40">
        <p className="text-8xl font-fjalla-one"> MY JOURNEY </p>
        <div className="flex flex-col mt-20">
          {datas.map((data, i) => (
            <JourneyCardWrapper key={`jcw_${i}`} data={data} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface datas {
  title: string;
  date: string;
  location: string;
  description: string;
}

interface JourneyCardProps {
  data: datas;
}

const JourneyCard = ({ data }: JourneyCardProps) => {
  return (
    <div
      className={`w-130 h-80 bg-neutral-900 rounded-lg border border-neutral-300 shadow-2xl shadow-neutral-500 font-google-sans`}
    >
      <div className="py-5 border-b px-5">
        <p className="text-lg font-semibold"> {data.title} </p>
      </div>
      <div className="p-3 font-normal mt-2">
        <p className="flex gap-2 items-center text-sm">
          <MapPin size={14} strokeWidth={1.5} />
          {data.location}
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-sm leading-6">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

interface JourneyCardWrapperProps extends JourneyCardProps {
  index: number;
}

const JourneyCardWrapper = ({ data, index }: JourneyCardWrapperProps) => {
  const container = useRef(null);

  const { scrollYProgress: containerYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(containerYProgress, [0, 1], [0, 1]);
  const dotScaleY = useTransform(
    containerYProgress,
    [0.49083333333333334, 0.5125],
    [0, 1],
  );

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 0.5,
      y: 0,
      transition: {
        duration: 0.7,
        bounce: 1,
      },
    },
  };

  return (
    <div
      ref={container}
      className="flex items-center px-10 h-full justify-center relative"
    >
      {/* left */}
      {index % 2 === 0 ? (
        <div className="py-20 z-20 ">
          <JourneyCard data={data} />
        </div>
      ) : (
        <div className="w-130">
          <p className="text-end text-xl">{data.date}</p>
        </div>
      )}

      {/* center */}
      <div className="h-150 flex items-center relative mx-20">
        <div className="h-full bg-white w-0.5 rounded-full relative overflow-hidden">
          <motion.div
            style={{
              scaleY,
            }}
            className="bg-violet-900 origin-top w-full h-full"
          />
        </div>
        <div className="w-3 h-3 bg-white rounded-full absolute -left-[4.5px] overflow-hidden">
          <motion.div
            style={{
              scaleY: dotScaleY,
            }}
            className="bg-violet-900 origin-top w-full h-full"
          />
        </div>
      </div>
      {/* right */}
      {index % 2 === 0 ? (
        <div className="w-130">
          <p className="text-start text-xl">{data.date}</p>
        </div>
      ) : (
        <div className="py-20 z-20">
          <JourneyCard data={data} />
        </div>
      )}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        className="absolute left-0 top-0 bg-white w-100 h-60 rounded-lg -rotate-3 z-10 opacity-50"
      />
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        className="absolute right-0 bottom-0 bg-white w-100 h-60 rounded-lg rotate-6 z-10 opacity-50"
      />
    </div>
  );
};

export default Experience;
