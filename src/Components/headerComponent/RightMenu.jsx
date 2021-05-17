import React, { Fragment } from "react";

const RightMenu = () => {
  return (
    <Fragment>
      <div className="rightMenu">
        <ul>
          <li>
            <a href="/">A</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/" className="buyPlan">
              <i class="fas fa-crown"></i> Buy Plan
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default RightMenu;
