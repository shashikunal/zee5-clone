import React, { Component } from "react";
import "./Admin.css";
class AdminDashboard extends Component {
  render() {
    let { photoURL, displayName } = this.props.userData;
    return (
      <section id="admin-dashBoard">
        <article>
          <aside className="sideBar">
            <div className="profile_area">
              <img src={photoURL} alt={displayName} />
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
