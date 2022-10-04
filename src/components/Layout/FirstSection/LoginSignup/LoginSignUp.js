import React from "react";
import { HiUser } from "react-icons/hi";
import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  return (
    <div className="login-signup-section pb-2 sm:pt-[30px] pt-[45px] hidden sm:flex flex-col pl-3 justify-center md:justify-start md:h-4/6 sm:gap-y-1 gap-y-5">
      <Link
        to="/login"
        className="login cursor-pointer rounded hover:bg-[#3A3A3A] text-white text-[18px] flex items-center gap-x-3 p-2 px-5"
      >
        <span>
          <HiUser className="text-xl" />
        </span>
        <span className="font-medium ">Login</span>
      </Link>
      <Link
        to="/register"
        className="register cursor-pointer rounded hover:bg-[#3A3A3A] text-white text-[18px] flex items-center gap-x-3 p-2 px-5"
      >
        <span>
          <CgEnter className="text-xl" />
        </span>
        <span className="font-medium  ">Register</span>
      </Link>
    </div>
  );
};

export default LoginSignUp;
