import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import "./Admin.css";

class AdminDashboard extends Component {
  onDeleteAccount = e => {
    try {
      let user = firebase.auth().currentUser;

      user
        .delete()
        .then(_ => {
          toast.success("successfully account deleted");
          this.props.history.push("/login");
        })
        .catch(err => {
          toast.error(err.message);
        });
    } catch (err) {
      toast.error(err.message);
    }
  };

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
              <Link to="/movies/add-movie">Add Movies</Link>
              <p>
                <button onClick={this.onDeleteAccount}>Delete Account</button>
              </p>
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

export default withRouter(AdminDashboard);
