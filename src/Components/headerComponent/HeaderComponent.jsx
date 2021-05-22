import React, { Fragment } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./header.css";
const HeaderComponent = props => {
  return (
    <Fragment>
      <nav>
        <LeftMenu />
        <RightMenu userData={props.userData} />
      </nav>
    </Fragment>
  );
};

export default HeaderComponent;
