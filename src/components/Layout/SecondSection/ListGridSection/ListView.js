import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/ContextProvider";

const ListView = () => {
  const { view } = useContext(Context);

  return (
    <div className="rounded text-white overflow-y-auto flex flex-col mt-8 bg-[#242424] items-center mx-4 p-1 md:p-3 h-[400px] sm:h-[300px] md:h-[580px] lg:h-[370px]">
      {view.renderarr.map((el, i) => (
        <Link
          key={el.id}
          className="mt-3 flex flex-col p-3 bg-[#343a40] rounded-[6px] w-[98%] bg-[#363636] hover:bg-[#484848]"
          to={`/rendermodel/${el.id}`}
        >
          {/* <div>{<el.Model />}</div> */}
          {`${el.name}`}
        </Link>
      ))}
    </div>
  );
};

export default ListView;
