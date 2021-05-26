import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";

class PasswordUpdate extends Component {
  state = {
    password: "",
    confirmPassword: "",
    loading: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      let { password, confirmPassword } = this.state;
      if (password === confirmPassword) {
        let user = firebase.auth().currentUser;
        user
          .updatePassword(password)
          .then(_ => {
            toast.success("successfully password updated");
            this.props.history.push("/admin");
          })
          .catch(err => {
            toast.error(err.message);
          });
      } else {
        toast.error("Password is not matching...");
      }
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false, password: "", confirmPassword: "" });
  };
  render() {
    let { password, confirmPassword, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>update Password to ZEE5</h2>
          <p>
            update Password to continue enjoying uninterrupted video and
            personalized experience.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="enter new password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <button>
                {loading === true ? `loading...` : "update password"}
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(PasswordUpdate);
