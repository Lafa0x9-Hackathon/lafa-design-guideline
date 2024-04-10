import React from "react";
import BoxShadow from "./BoxShadow";
import BoxShadowHeader from "./BoxShadowHeader";
import "./Shadow.css";

const Shadow = () => {
  return (
    <div id="mainbody">
      <BoxShadowHeader />
      <BoxShadow size={8} boxnum={1} />
      <BoxShadow size={16} boxnum={2} />
      <BoxShadow size={24} boxnum={3} />
    </div>
  );
};

export default Shadow;
