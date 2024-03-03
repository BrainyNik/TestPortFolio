import { IoMail, IoHome } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="section flex flex-col  items-center ">
      <h1 className="text-4xl text-blue-700 font-bold m-6">Contact</h1>
      <div className="flex gap-6 mb-6">
        <div className="w-[500px] h-[169px] shadow-2xl rounded-lg flex flex-col items-center justify-center  p-3">
          <IoMail className="text-blue-700 text-4xl" />
          <p className="text-2xl text-gray-700">monarchofnobitches@gmail.com</p>
        </div>
        <div className="w-[500px] h-[169px] shadow-2xl rounded-lg flex flex-col items-center justify-center  p-3">
          <IoHome className="text-blue-700 text-4xl" />
          <p className="text-2xl text-gray-700">Streetss</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
