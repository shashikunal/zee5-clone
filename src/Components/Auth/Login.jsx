import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
class Login extends Component {
  render() {
    return (
      <section id="AuthBlock">
        <article>
          <h2>Login to ZEE5</h2>
          <p>
            Login to continue enjoying uninterrupted video and personalized
            experience.
          </p>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <button>Login</button>
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

export default Login;
