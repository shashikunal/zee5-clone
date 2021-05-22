import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/headerComponent/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PageNotFound from "./Pages/PageNotFound";
import firebase from "./firebase";
//!toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Components/Auth/ForgotPassword";

class App extends Component {
  state = {
    userData: "",
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
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
