import React from "react";
import "./BoxShadow.css";

const BoxShadow = (props) => {
  return (
    <div id="body">
      <div
        id="box"
        style={{ boxShadow: `0px 0px ${props.size}px #E2E0E7` }}
      ></div>
      <div>
        <p> 0px 0px {props.size}px #E2EOE7;</p>
      </div>
      <div>
        <p>shadows-{props.boxnum}</p>
      </div>
    </div>
  );
};

export default BoxShadow;
