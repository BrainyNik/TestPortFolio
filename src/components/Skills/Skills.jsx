import { FaPython, FaBrain, FaLanguage } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

import { HiMiniCircleStack } from "react-icons/hi2";
import img from "./Skills1.jpg";

const Skills = () => {
  // Define an array of skill objects containing the skill name and corresponding icon component
  const skills = [
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: HiMiniCircleStack },
    { name: "Machine Learning", icon: FaGears },
    { name: "Deep Learning", icon: FaBrain },
    { name: "Natural Language Processing", icon: FaLanguage },
  ];

  return (
    <div className="px-[8rem] text-center section  " id="skills">
      <div className="text-4xl font-bold text-blue-700 mb-7">Skills</div>

      <div className="flex items-start flex-col ">
        <h1 className="font-bold text-2xl mb-8 ">Technical Skills</h1>
        <div className="flex gap- w-[100%] justify-between ">
          <div className="flex flex-col w-[50%] ">
            {/* Map through the skills array and render each skill */}
            {skills.map((skill, index) => (
              <div key={index} className=" skills  ">
                <skill.icon />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="w-[400px] h-[400px] ">
            <img src={img} alt="skills-img" className="rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
