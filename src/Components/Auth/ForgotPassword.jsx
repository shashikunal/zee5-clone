import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
class ForgotPassword extends Component {
  state = {
    email: "",
    loading: false,
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await firebase.auth().sendPasswordResetEmail(this.state.email);
      let message = "please check your registered email account and reset";
      toast.success(message);
      this.props.history.push("/");
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false, email: "" });
  };
  render() {
    let { email, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>Forgot Password to ZEE5</h2>
          <p>
            Forgot Password to continue enjoying uninterrupted video and
            personalized experience.
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
              <button>
                {loading === true ? `loading...` : "Forgot password"}
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(ForgotPassword);
