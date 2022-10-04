import React, { useContext } from "react";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

import { Context } from "../../../../context/ContextProvider";

const ToggleView = () => {
  const { view, setView } = useContext(Context);

  const licls =
    "px-4 sm:px-6 py-2 bg-[#343a40]  hover:bg-[#23272B] focus:shadow-[0_0_0_3px_rgb(75,81,87,0.5)] focus:bg-[#23272b] focus:text-white rounded-l";
  const grdcls =
    " px-4 sm:px-6 py-2 bg-[#343a40] hover:bg-[#23272B] focus:shadow-[0_0_0_3px_rgb(75,81,87,0.5)] focus:bg-[#23272b] focus:text-white rounded-r";

  return (
    <>
      {/* -----------------list button----------------- */}
      <button
        onClick={() => {
          setView({ ...view, currview: "list" });
        }}
        className={view.currview === "list" ? licls + " text-white" : licls}
      >
        <FaListUl className="text-lg md:text-xl" />
      </button>

      {/* -------------------grid button--------------- */}
      <button
        onClick={() => {
          setView({ ...view, currview: "grid" });
        }}
        className={view.currview === "grid" ? grdcls + " text-white" : licls}
      >
        <BsGrid3X3GapFill className="text-lg md:text-xl" />
      </button>
    </>
  );
};

export default ToggleView;
