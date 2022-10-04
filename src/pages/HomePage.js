import React from "react";
import FirstSection from "../components/Layout/FirstSection/FirstSection";
import SecondSect from "../components/Layout/SecondSection/SecondSect";

const HomePage = () => {
  return (
    <div className="home h-[100vh] bg-[#121212]">
      <div className="section-container h-full w-full flex flex-col md:flex-row">
        {/* ----------------------1st section--------------------- */}
        <FirstSection />

        {/* -----------------2nd section-------------------- */}
        <SecondSect />

        {/* ---------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default HomePage;
