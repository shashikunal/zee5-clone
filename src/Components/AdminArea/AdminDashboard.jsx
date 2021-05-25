import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
class AdminDashboard extends Component {
  render() {
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
          </aside>
          <main className="admin-container">Main Data</main>
        </article>
      </section>
    );
  }
}

export default AdminDashboard;
