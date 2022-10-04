import React, { useContext } from "react";
import ToggleView from "./ToggleView";
// import Threedmodels from "../../.././directory/Threedmodels";
import { Context } from "../../../.././context/ContextProvider";
import retailmodels from "../../../directory/Retail3dmodels";

const TailSect = () => {
  const { view, setView } = useContext(Context);

  // ----------------------input search filter----------------------------
  const searchHandler = (e) => {
    let inputvalue = e.target.value.toString();
    const newrender = retailmodels.filter((el, i) =>
      el.name.toLowerCase().includes(inputvalue.toLowerCase())
    );
    // console.log(newrender);
    setView({ ...view, renderarr: newrender });
  };

  return (
    <div className="tail-section mt-[15px] md:mt-[35px] sm:px-7 px-5 pb-4">
      <div className="navigation flex justify-between items-end">
        <div className="searchbox">
          <input
            onChange={searchHandler}
            required
            type="search"
            placeholder="&#128269; Search"
            className=" w-[170px] sm:w-[320px] md:w-[300px] sm:px-4 md:px-6 md:pr-[80px] py-[5px] rounded placeholder:text-[#4d545c] text-white  pl-[8px] border-[1px] rounded border-[#6c757d] bg-[#242424]"
          />
        </div>
        <div className="toggleview text-black ">
          <ToggleView />
        </div>
      </div>
    </div>
  );
};

export default TailSect;
