import React, { Fragment, useState } from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

const RightMenu = () => {
  let [toggle, setToggle] = useState(false);

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
            <a href="#" onClick={() => setToggle(!toggle)}>
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <section id="sidebarWrapper">
          <article>
            <SideBarMenu toggle={toggle} />
          </article>
        </section>
      </div>
    </Fragment>
  );
};

export default RightMenu;
