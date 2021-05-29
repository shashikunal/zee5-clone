import React from "react";
import ListOfMovies from "../Components/MoviesComponent/ListOfMovies";
import SliderComponent from "../Components/SliderComponent/SliderComponent";

const Home = () => {
  return (
    <div>
      <section id="sliderWrapper">
        <SliderComponent />
        <ListOfMovies />
      </section>
    </div>
  );
};

export default Home;
