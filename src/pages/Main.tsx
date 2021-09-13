import { observer } from "mobx-react";
import React from "react";
import useStores from "../hooks/useStore";

const Main = () => {
  const { store } = useStores();
  console.log(store);
  return (
    <div>
      <div>Main</div>
    </div>
  );
};
export default observer(Main);
