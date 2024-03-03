import { FaLinkedinIn, FaGithub, FaKaggle } from "react-icons/fa";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";
export const HeroHeading = () => {
  const skills = ["Machine Learning", "Deep Learning", "NLP"];

  return (
    <div className="flex items-center justify-center min-h-[80vh] flex-col gap-5  mb-10">
      <div className="h-1 relative">
        {" "}
        <ParticlesContainer />
      </div>

      <h1 className="text-[6rem]  ">Haggra Nigga</h1>

      <div className="flex gap-5 mb-3 ">
        {skills.map((item, index) => {
          return (
            <p
              className={
                "text-2xl font-bold  pr-2 tracking-wider" +
                (index === skills.length - 1
                  ? " "
                  : " border-r-4 border-blue-600")
              }
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      <a
        className="bg-blue-600 p-3 px-9 rounded-md z-20 text-xl text-white font-semibold tracking-wide
        hover:text-black transition ease-in-out delay-250 duration-500 shadow-[0_10px_36px_rgba(0,0,0,0.5)] cursor-pointer  "
      >
        Resume
      </a>

      <div className="home__links flex gap-10 justify-center items-center absolute bottom-20 text-3xl">
        <motion.div
          whileHover={{
            y: [-10, 0],
            transition: { duration: 0.3, yoyo: Infinity },
          }}
        >
          <a href="#" target="_blank">
            <FaLinkedinIn />
          </a>
        </motion.div>
        <a href="#" target="_blank">
          <FaGithub />
        </a>
        <a href="#" target="_blank">
          <FaKaggle />
        </a>
      </div>
    </div>
  );
};
