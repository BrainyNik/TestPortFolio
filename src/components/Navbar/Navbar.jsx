import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const links = ["Home", "About", "Skills", "Project", "Contact"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const HandleOnBlur = () => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 150);
  };
  return (
    <div className="h-[80px] bg-white px-[5em] flex justify-between items-center z-50 shadow-sm sticky top-0">
      <div className="uppercase text-[2rem] font-bold">
        <a href="#">Niggero</a>
      </div>

      <div className="hidden md:flex gap-8 font-medium text-[1.2rem]">
        {links.map((item, index) => (
          <a
            href={"#" + item.toLowerCase()}
            className="block hover:border-blue-500 hover:border-b-2 duration-150 transition  ease-in-out"
            key={index}
          >
            {item}
          </a>
        ))}
      </div>

      <div
        className="md:hidden flex items-center justify-center gap-8 font-medium text-[1.2rem] relative"
        onBlur={HandleOnBlur}
      >
        {/* Hamburger menu icon */}
        <button>
          {mobileMenuOpen ? (
            <MdClose onClick={toggleMobileMenu} />
          ) : (
            <RxHamburgerMenu onClick={toggleMobileMenu} />
          )}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col gap-8 font-medium text-[1.2rem] w-[100px]  items-center justify-center absolute top-[25px] right-0 py-3 bg-gray-100 shadow-md border-gray-200 border">
            {links.map((item, index) => (
              <a
                href={"#" + item.toLowerCase()}
                className="block hover:border-blue-500 hover:border-b-2 duration-150 transition  ease-in-out"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
