import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#1f1f1f] text-white gap-6 pt-10 pb-3">
      <div className="text-4xl">Social Media</div>
      <div className="flex gap-6 text-4xl">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
      <div className="">&copy;BrainyNik 2024 all Rights Reserved.</div>
    </div>
  );
};

export default Footer;
