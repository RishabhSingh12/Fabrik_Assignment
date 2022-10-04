import React from "react";
import { Link } from "react-router-dom";
import fabrikLogo from "../assets/fabrik_full_logo.png";

const RegisterPage = () => {
  return (
    <div className="bg-[#121212] h-[100vh] flex flex-col gap-2 justify-center items-center bg-[url('./assets/register-bg.png')] bg-cover">
      <div className="logo-img-container w-[150px] mb-2">
        <img src={fabrikLogo} alt="" />
      </div>
      {/* ----------------------input form----------------------------- */}
      <form className="login bg-[#242424] p-1 shadow-inner border-[1px] border-[#363636] w-[90%] sm:w-[50%] md:w-[45%] lg:w-[30%] h-[380px] lg:h-[390px] rounded-md flex flex-col gap-6 items-start">
        <p className="text-white mx-auto text-lg font-bold">Register</p>

        {/* --------------------Name-input part------------------------------- */}
        <div className="flex flex-row justify-evenly">
          <div className="name-input-part mx-auto flex flex-col ml-5 md:ml-8 lg:ml-4 gap-y-1">
            <label htmlFor="password" className="text-white pr-2 font-semibold">
              Firstname :
            </label>
            <input
              type="name"
              required
              name="name"
              id="name"
              placeholder="Enter your firstname"
              className="rounded p-1 w-[90%] bg-[#444]"
            />
          </div>

          {/* ---------------------------Lastname part--------------------------------- */}
          <div className="name-input-part mx-auto flex flex-col items-start gap-y-1">
            <label htmlFor="password" className="text-white pr-2 font-semibold">
              Lastname :
            </label>
            <input
              type="name"
              required
              name="name"
              id="name"
              placeholder="Enter your lastname"
              className="rounded p-1 w-[90%] bg-[#444]"
            />
          </div>
        </div>

        {/* ---------------------E-mail-input part------------------------------------ */}
        <div className="email-part  flex flex-col ml-4 ">
          <label htmlFor="email" className="text-white  font-semibold">
            Enter Email :
          </label>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Enter your email"
            className="rounded p-1 w-[290px] sm:w-[290px] md:w-[315px] lg:w-[360px] bg-[#444]"
          />
        </div>

        {/* -----------------------------Password part----------------------------- */}
        <div className="flex flex-row justify-evenly">
          <div className="password-part mx-auto flex flex-col ml-5 md:ml-8 lg:ml-4">
            <label htmlFor="password" className="text-white pr-2 font-semibold">
              Enter <br /> Password :
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your 6-digit password"
              className="rounded p-1 w-[90%] bg-[#444]"
            />
          </div>

          {/* ---------------------------Confirm Password part--------------------------------- */}
          <div className="password-part mx-auto flex flex-col items-start">
            <label htmlFor="password" className="text-white pr-2 font-semibold">
              Confirm <br /> Password :
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your 6-digit password"
              className="rounded p-1 w-[90%] bg-[#444]"
            />
          </div>
        </div>

        {/* ---------------------Register button link---------------------  */}
        <Link
          to="/"
          className="px-[60px] py-[8px] text-center text-sm rounded text-white hover:bg-[#007bff] bg-[#026bdc] mx-auto"
          type="submit"
        >
          Register
        </Link>
      </form>

      {/* ---------------------------Login link------------------------------- */}
      <Link
        to="/login"
        className="text-white hover:text-[#cdc8c8]  font-semibold"
      >
        Already have an Account? Login
      </Link>
    </div>
  );
};

export default RegisterPage;
