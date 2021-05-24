import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
class PhoneAuth extends Component {
  state = {
    phone: "",
    loading: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const captchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone, captchaVerifier)
        .then(confirmResult => {
          //verify OTP from your mobile
          let verificationCode = window.prompt("enter OTP here");
          //confirm it
          confirmResult
            .confirm(verificationCode)
            .then(result => {
              let userData = result.user;
              toast.success("Successfully Logged In");
              console.log(userData);
              this.props.history.push("/");
            })
            .catch(err => console.log(err));
        })
        .catch(err => {
          toast.error(err.message);
        });
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false, phone: "" });
  };

  render() {
    let { phone, loading } = this.state;
    return (
      <section id="AuthBlock">
        <article>
          <h2>Login to ZEE5</h2>
          <p>
            Login to continue enjoying uninterrupted video and personalized
            experience. OTP
          </p>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Valid phone number"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                required
              />
            </div>
            <div id="recaptcha-container"></div>

            <div className="form-group">
              <button>{loading === true ? `loading...` : "Send OTP"}</button>
            </div>
            <div className="form-group">
              <span>Already have an account</span>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(PhoneAuth);
