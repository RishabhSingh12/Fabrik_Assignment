import React from "react";

const HeadSect = () => {
  return (
    <div className="head-section p-5  lg:p-6 lg:h-[250px] sm:h-[210px] h-[230px] md:h-[280px] bg-cover bg-[url('./assets/community-bg.png')]  pb-[40px]">
      <h1 className="text-gray-200 text-[40px] lg:text-[45px] font-semibold text-center md:mt-[80px] mt-5 mb-3">
        Community
      </h1>
      <p className="text-white text-xl text-center lg:text-[25px] pb-3 sm:pb-1">
        Ideas of the open world
      </p>
    </div>
  );
};

export default HeadSect;
