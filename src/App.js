import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/headerComponent/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PageNotFound from "./Pages/PageNotFound";

//!toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <section id="headerBlock">
            <article>
              <HeaderComponent />
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
