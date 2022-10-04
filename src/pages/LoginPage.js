import React from "react";
import { Link } from "react-router-dom";
import fabrikLogo from "../assets/fabrik_full_logo.png";

const LoginPage = () => {
  return (
    <div className="bg-[#121212] h-[100vh] flex flex-col gap-2 justify-center items-center bg-[url('./assets/register-bg.png')] bg-cover">
      <div className="logo-img-container w-[150px] mb-2">
        <img src={fabrikLogo} alt="" />
      </div>
      {/* ----------------------input form----------------------------- */}
      <form className="login bg-[#242424]  shadow-inner border-[1px] border-[#363636] w-[90%] sm:w-[45%] md:w-[25%] h-[300px] rounded-md flex flex-col justify-evenly items-center">
        <p className="text-white mx-auto text-lg font-bold">Login</p>

        {/* ---------------------E-mail-input part------------------------------------ */}
        <div className="email-part  flex flex-col items-start ">
          <label htmlFor="email" className="text-white  font-semibold">
            Your Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="rounded p-1 w-[280px] bg-[#444]"
          />
        </div>

        {/* -----------------------------Password part----------------------------- */}
        <div className="password-part mx-auto flex flex-col items-start">
          <label htmlFor="password" className="text-white pr-2 font-semibold">
            Your Password :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your 6-digit password"
            className="rounded p-1 w-[280px] bg-[#444]"
          />
        </div>

        {/* ------------------------Forgot password section -------------------------- */}
        <div className="text-white flex items-center space-x-4 mx-auto ">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mr-[5px]"
          />
          Remember-me
          <Link to="/" className="hover:text-[#adadad] text-white">
            Forgot Password ?
          </Link>
        </div>

        {/* ---------------------Login button link---------------------  */}
        <Link
          to="/"
          className="px-[60px] py-[8px] text-center text-sm rounded text-white hover:bg-[#007bff] bg-[#026bdc]"
          type="submit"
        >
          Login
        </Link>
      </form>

      {/* ---------------------------Registration link------------------------------- */}
      <Link
        to="/register"
        className="text-white hover:text-[#cdc8c8]  font-semibold"
      >
        Don't have a Account? Register
      </Link>
    </div>
  );
};

export default LoginPage;
