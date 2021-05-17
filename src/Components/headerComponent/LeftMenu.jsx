import React, { Fragment } from "react";

const LeftMenu = () => {
  return (
    <Fragment>
      <div className="leftMenu">
        <div className="logoBlock">
          <img className="logo" src="ZEE5_logo.svg" alt="logo" />
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <a href="/"> home</a>
            </li>
            <li>
              <a href="/"> TV Shows</a>
            </li>
            <li>
              <a href="/"> Movies</a>
            </li>
            <li>
              <a href="/"> Web Series</a>
            </li>
            <li>
              <a href="/"> news</a>
            </li>
            <li>
              <a href="/"> premium</a>
            </li>
            <li>
              <a href="/"> live tv</a>
            </li>
            <li>
              <a href="/"> zeePlex</a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-th"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftMenu;
