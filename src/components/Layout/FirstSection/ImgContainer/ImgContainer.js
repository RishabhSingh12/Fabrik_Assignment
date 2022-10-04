import React from "react";
import fabriklogo from "../../../../assets/fabrik_full_logo.png";

const ImgContainer = () => {
  return (
    <div className="img-container  md:py-5">
      <img
        src={fabriklogo}
        alt="fabrikLogo"
        className="lg:w-[150px] w-[110px]"
      />
    </div>
  );
};

export default ImgContainer;
