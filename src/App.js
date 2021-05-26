import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/headerComponent/HeaderComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PageNotFound from "./Pages/PageNotFound";
import firebase from "./firebase";
//!toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import PhoneAuth from "./Components/Auth/PhoneAuth";
import AdminDashboard from "./Components/AdminArea/AdminDashboard";
import UploadProfilePhoto from "./Components/Auth/uploadProfilePhoto";
import PasswordUpdate from "./Components/AdminArea/PasswordUpdate";

class App extends Component {
  state = {
    userData: "",
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        console.log("user logged in");
        this.setState({ userData: user });
        this.props.history.push("/");
      } else {
        console.log("user is not logged in");
        this.setState({ userData: "" });
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <section id="headerBlock">
            <article>
              <HeaderComponent userData={this.state.userData} />
            </article>
          </section>
          <ToastContainer />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
            <Route path="/send-otp" exact>
              <PhoneAuth />
            </Route>
            {this.state.userData.email ? (
              <Route path="/admin" exact>
                <AdminDashboard userData={this.state.userData} />
              </Route>
            ) : null}
            {/*for auth users */}
            {this.state.userData ? (
              <Fragment>
                <Route path="/upload-profile-photo" exact>
                  <UploadProfilePhoto userData={this.state.userData} />
                </Route>
                <Route path="/update-password" exact>
                  <PasswordUpdate />
                </Route>
              </Fragment>
            ) : null}

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
