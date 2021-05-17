import React, { Fragment } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./header.css";
const HeaderComponent = () => {
  return (
    <Fragment>
      <nav>
        <LeftMenu />
        <RightMenu />
      </nav>
    </Fragment>
  );
};

export default HeaderComponent;
