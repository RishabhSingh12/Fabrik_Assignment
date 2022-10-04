import React, { useState } from "react";
import ImgContainer from "./ImgContainer/ImgContainer";
import LoginSignUp from "./LoginSignup/LoginSignUp";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const FirstSection = () => {
  const [toggle, setToggle] = useState(null);
  const togglemenuview = () => {
    setToggle(1);
  };
  const togglemenuclose = () => {
    setToggle(null);
  };

  return (
    <>
      <div className="firstsection bg-backGround flex justify-between sm:flex-col items-center md:w-2/6 lg:w-1/6 p-4 sm:pt-10 pt-5  md:p-4">
        {/* -------------ImgContainer------------ */}
        <ImgContainer />
        {/* ------------login/signup section-------- */}
        <LoginSignUp />

        {/* ---------------------------Toggle menu --------------------------------- */}

        <div className="togglemenu flex flex-row items-start sm:hidden">
          <button onClick={togglemenuview} className="flex justify-center ">
            {!toggle ? (
              <GiHamburgerMenu className="sm:hidden text-xl text-white" />
            ) : (
              <GiHamburgerMenu className="hidden" />
            )}
          </button>
          <button
            className="text-2xl mr-5 text-white"
            onClick={togglemenuclose}
          >
            {toggle ? <IoClose /> : <IoClose className="hidden" />}
          </button>
        </div>
      </div>

      {/* ----------------------toggle-login-signup---------------------- */}
      {toggle ? (
        <div className="toggleopen flex flex-col justify-between border-2 border-[#938f8f] py-5 bg-backGround gap-y-3  text-white translate-y-[1px] w-[98%] sm:hidden">
          <Link to="/login" className="p-2 hover:bg-[#3A3A3A] pl-7 py-2">
            Login
          </Link>
          <Link to="/register" className="p-2 hover:bg-[#3A3A3A] pl-7 py-2">
            Register
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FirstSection;
