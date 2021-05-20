import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import "./Auth.css";
class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    loading: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let { email, password, confirmpassword, phonenumber, loading } =
        this.state;
      if (password === confirmpassword) {
        //use firebase auth
        let userData = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        //?send email verification for legal user or not
        let verificationMessage = `A verification has been sent to ${email} please verify and use our application`;
        userData.user.sendEmailVerification(); //?email verifier given by firebase
        toast.info(verificationMessage);
        this.props.history.push("/login"); //?redirection
      } else {
        toast.error("password is not match");
      }

      this.setState({
        email: "",
        password: "",
        confirmpassword: "",
        phonenumber: "",
        loading: false,
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  render() {
    let { email, password, confirmpassword, phonenumber, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>Register to ZEE5</h2>
          <p>
            Register to continue enjoying uninterrupted video and personalized
            experience.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="phone number"
                name="phonenumber"
                value={phonenumber}
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
              <input
                type="password"
                className="form-control"
                placeholder="confirmpassword"
                name="confirmpassword"
                value={confirmpassword}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button>Register</button>
            </div>
            <div className="form-group">
              <p>
                Already have an account please ? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(Register);
