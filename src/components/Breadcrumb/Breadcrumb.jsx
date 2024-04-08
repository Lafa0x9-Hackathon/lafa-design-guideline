import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ children }) => {
  const location = useLocation();
  let presentPage = "";
  const crumb = location.pathname
    .split("/")
    .filter((ele) => ele !== "")
    .map((x, index, array) => {
      presentPage += `/${x}`;

      return (
        <div id="bar" key={x}>
          <Link to={presentPage}>{x}</Link>
          <p>{">"}</p>
        </div>
      );
    });
  console.log("this", presentPage);
  console.log(children);
  return (
    <div id="main1">
      <div id="header">Breadcrumb</div>
      <div id="text">
        Indicate the current page’s location within a navigational hierarchy.
        When your page is more than one level deep, use a breadcrumb so users
        can understand where they are.
      </div>
      <div id="nav"> {crumb}</div>
      {/* <div id="child">{children}</div> */}
      <Outlet />
    </div>
  );
};

export default Breadcrumb;
