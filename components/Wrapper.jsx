import React from "react";
import Javascript from "./layouts/Javascript";
import RightMenu from "./layouts/RightMenu";
import Topbar from "./layouts/Topbar";
import VerticalMenu from "./layouts/VerticalMenu";

export default function Wrapper({ children }) {
  return (
    <div id="layout-wrapper">
      <Topbar />
      <VerticalMenu />
      {/* <RightMenu /> */}
      {children}
      <Javascript />
    </div>
  );
}
