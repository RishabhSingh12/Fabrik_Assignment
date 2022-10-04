import React, { useContext } from "react";

import { Context } from "../../../../context/ContextProvider";
import GridView from "./GridView";
import ListView from "./ListView";

const ListGridSection = () => {
  const { view } = useContext(Context);

  return view.currview === "list" ? <ListView /> : <GridView />;
};

export default ListGridSection;
