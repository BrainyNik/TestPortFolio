import img from "./davai.jpeg";

const AboutMe = () => {
  return (
    <div className=" flex flex-col section py-4 h-[500px]" id="about">
      <div className="text-4xl font-bold text-blue-700  p-10 text-center">
        About Me
      </div>
      <div className="flex items-center justify-center h-[300px] gap-14 ">
        <div className="w-[350px] h-[300px] ">
          <img
            src={img}
            alt="profile-img"
            className="border-2 border-black  custom-morph w-full h-full "
          />
        </div>
        <div className="w-[40%]  text-xl text-center">
          <p>
            I am a Data Science and a Machine Learning enthusiast. I am
            currently pursuing my Master's in Data Science from Fergusson
            College, Pune. I am a quick learner and a team player. I am always
            open to new opportunities and challenges. If you don't find me
            coding or learning new things, you will find me playing basketball
            or watching anime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
