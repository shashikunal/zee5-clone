import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/headerComponent/HeaderComponent";
import SliderComponent from "./Components/SliderComponent/SliderComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <section id="headerBlock">
          <article>
            <HeaderComponent />
          </article>
        </section>

        <section id="sliderWrapper">
          <SliderComponent />
        </section>
      </Fragment>
    );
  }
}

export default App;
