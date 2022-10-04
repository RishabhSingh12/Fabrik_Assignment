import React, { useContext } from "react";
import { Link } from "react-router-dom";
import fabriklogo from "../../../../assets/fabrik_full_logo.png";
import { Context } from "../../../../context/ContextProvider";

const GridView = () => {
  const { view } = useContext(Context);

  return (
    <div className="rounded text-white overflow-y-auto flex justify-around lg:justify-center flex-wrap mt-8 bg-[#242424] items-center mx-4 p-1 md:p-3  gap-5 lg:gap-x-[50px] h-[400px] sm:h-[300px] md:h-[580px] lg:h-[370px]">
      {view.renderarr.map((el, i) => (
        <Link
          className="mt-3 p-3 flex flex-col justify-evenly items-center bg-[#343a40] rounded-[6px] w-[45%] lg:w-[20%] h-[210px] sm:h-[240px] bg-[#363636] hover:bg-[#484848] gap-y-1"
          key={el.id}
          to={`/rendermodel/${el.id}`}
        >
          <div className="p-1">
            <img src={fabriklogo} alt="" className="h-[190px]" />
          </div>
          <div>{el.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default GridView;
