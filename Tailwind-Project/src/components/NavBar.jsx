import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
const NavBar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };
  return (
    <div className="navbar flex bg-indigo-200 p-4 justify-between relative">
      <div className="logo mt-1 hover:scale-95 transition-all cursor-pointer">
        <span className="font-bold text-indigo-800 text-xl ">SkillSurge</span>
      </div>

      <div className="navigation hidden sm:block">
        <ul className=" flex gap-10 font-bold mt-1">
          <li className="cursor-pointer hover:opacity-80">Home</li>
          <li className="cursor-pointer hover:opacity-80">About</li>
          <li className="cursor-pointer hover:opacity-80">Contact Us</li>
        </ul>
      </div>

      <div className="authButton hidden sm:block">
        <button className="bg-blue-700 p-2 rounded-lg text-white font-bold text-sm hover:opacity-80">
          Login/Signup
        </button>
      </div>

      {!showHamburger ? (
        <button className="sm:hidden " onClick={toggleHamburger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ) : (
        <button className="sm:hidden" onClick={toggleHamburger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      {showHamburger && <HamburgerMenu/>}
    </div>
  );
};

export default NavBar;
