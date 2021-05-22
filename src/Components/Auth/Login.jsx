import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import "./Auth.css";
class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      let { email, password } = this.state;
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      //?Email Verified

      if (userData.user.emailVerified === true) {
        let message = `${userData.user.displayName} has been successfully logged in`;
        toast.success(message);

        this.props.history.push("/");
      } else {
        let errorMessage = `${email} is not yet verified please verify ${email} then login`;
        toast.error(errorMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false, email: " ", password: "" });
  };
  render() {
    let { email, password, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>Login to ZEE5</h2>
          <p>
            Login to continue enjoying uninterrupted video and personalized
            experience.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <Link to="/forgot-password">forgot password</Link>
            </div>
            <div className="form-group">
              <button>{loading === true ? `loading...` : "Login"}</button>
            </div>
            <div className="form-group">
              <p>
                New to ZEE5 ? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(Login);
