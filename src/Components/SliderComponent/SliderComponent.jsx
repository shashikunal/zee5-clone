import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderComponent = () => {
  return (
    <Fragment>
      <Carousel infiniteLoop centerMode autoPlay>
        <div>
          <img src="sliders_images/slider1.webp" alt="slider1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="sliders_images/slider2.webp" alt="slider2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="sliders_images/slider3.webp" alt="slider3" />
          <p className="legend">Legend 3</p>
        </div>

        <div>
          <img src="sliders_images/slider4.webp" alt="slider4" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="sliders_images/slider5.webp" alt="slider5" />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default SliderComponent;
