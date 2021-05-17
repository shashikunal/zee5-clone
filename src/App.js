import React, { Component } from "react";
import HeaderComponent from "./Components/headerComponent/HeaderComponent";

class App extends Component {
  render() {
    return (
      <section id="headerBlock">
        <article>
          <HeaderComponent />
        </article>
      </section>
    );
  }
}

export default App;
