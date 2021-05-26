import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import firebase from "../../firebase";
import "./Admin.css";
import PasswordUpdate from "./PasswordUpdate";
class AdminDashboard extends Component {
  render() {
    console.log(this.props);
    let { photoURL, displayName } = this.props.userData;
    return (
      <section id="admin-dashBoard">
        <article>
          <aside className="sideBar">
            <div className="profile_area">
              <Link to="upload-profile-photo">
                <span className="edit-icon">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
                <img src={photoURL} alt={displayName} />
              </Link>

              <h3>{displayName}</h3>
            </div>
            <hr />
            <div className="profile_account_setting">
              <Link to="update-password">Update Password</Link>
            </div>
          </aside>
          <main className="admin-container">
            <h1>main</h1>
          </main>
        </article>
      </section>
    );
  }
}

export default AdminDashboard;
