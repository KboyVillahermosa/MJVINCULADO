import React from "react";
import "./Header.css";
import { Button } from "flowbite-react";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-top dark:bg-gray-800">
        <div className="header-content">
          <img src="/public/mj.jpg" alt="" />
        </div>
        <div className="content-text">
          <h1 className="dark:text-white" >MJ <span className="text-[#1cab9c]">Vinculado</span></h1>
          <p className="dark:text-white">
            A highly motivated individual with a passion for web development and
            multimedia design, seeking to apply my technical skills in HTML,
            CSS, MySQL, and version control systems like Git. I am committed to
            continuous learning and contributing effectively, aiming to build a
            strong foundation in the field of technology.
          </p>
          <div className="content-btn flex gap-2 mt-5">
          <Button gradientDuoTone="greenToBlue">Resume</Button>
          <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
