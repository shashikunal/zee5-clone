import React, { Fragment, useState } from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
const RightMenu = props => {
  let [toggle, setToggle] = useState(false);
  let { displayName, photoURL } = props.userData;

  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.info("Successfully logout");
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );
  };
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/">
            <img src={photoURL} alt={displayName} />
          </Link>
        </li>
        <li>
          <a href="/" onClick={Logout}>
            Logout
          </a>
        </li>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <div className="rightMenu">
        <ul>
          <li>
            <a href="/">A</a>
          </li>

          <li>
            <a href="/">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </li>
          {props.userData.emailVerified ? (
            <AuthenticatedUser />
          ) : (
            <AnonymousUser />
          )}
          <li>
            <a href="/" className="buyPlan">
              <i class="fas fa-crown"></i> Buy Plan
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(!toggle)}>
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

export default withRouter(RightMenu);
