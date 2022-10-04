import React from "react";
import HeadSect from "./HeadSection/HeadSect";
import ListSection from "./ListGridSection/ListGridSection";
import TailSect from "./TailSection/TailSect";

const SecondSect = () => {
  return (
    <div id="secondsection" className=" md:w-5/6 lg:w-5/6 lg:p-3 flex flex-col">
      <HeadSect />
      <TailSect />
      <ListSection className="initialsection rounded text-white overflow-y-auto flex flex-col mt-6 bg-[#242424] items-center mx-4 p-1 md:p-3 h-[325px] sm:h-[205px] md:h-full" />
      {/* {React.createElement("div", { id: "sect" })} */}
    </div>
  );
};

export default SecondSect;
