import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderComponent = () => {
  return (
    <Fragment>
      <Carousel infiniteLoop centerMode autoPlay>
        <div>
          <img src="sliders_images/slider1.webp" alt="slider1" />
          <div className="legend">
            <h2>Hero </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p>
              A barber’s decision to take revenge on his ex-girlfriend turns
              adventurous after he realises that her husband is a notorious
              gangster.
            </p>
            <p>
              <button>Play</button>
              <button className="buy_plan">Buy Plan</button>
            </p>
          </div>
        </div>
        <div>
          <img src="sliders_images/slider2.webp" alt="slider2" />
          <div className="legend">
            <h2>Jothe Jotheyali </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Now, viewers in India can watch Jothe Jotheyali episodes before
              their TV telecast on ZEE5! Jothe Jotheyali is a 2019 Kannada
              romantic television serial starring Aniruddha Jatkar as
              Aryavardhan, a 45-year-old businessman, and Megha Shetty as Anu, a
              20-year-old girl. Life brings them together and despite their age
              and mindset differences, they fall in love and get married. But,
              will their marriage stand the test of time?
            </p>
            <p>
              <button>Play</button>
              <button className="buy_plan">Buy Plan</button>
            </p>
          </div>
        </div>
        <div>
          <img src="sliders_images/slider3.webp" alt="slider3" />
          <div className="legend">
            <h2>Gattimela </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Now, viewers in India can watch Gattimela episodes before their TV
              telecast on ZEE5! Gattimela is a Kannada drama television serial
              about the responsibilities that the protagonists, Vedanth and
              Amulya, share. As time passes, Vedanth starts to develop feelings
              for Amulya but refuses to express it as his reputation is at
              stake.
            </p>
            <p>
              <button>Play</button>
              <button className="buy_plan">Buy Plan</button>
            </p>
          </div>
        </div>

        <div>
          <img src="sliders_images/slider4.webp" alt="slider4" />
          <div className="legend">
            <h2>Radhe </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              Radhe, an invincible cop, is the last hope of a city grappling
              with drug abuse and overrun by criminals. How far will Radhe go to
              bring peace to the city?
            </p>
            <p>
              <button>Play</button>
            </p>
          </div>
        </div>
        <div>
          <img src="sliders_images/slider5.webp" alt="slider5" />
          <div className="legend">
            <h2>Shadow </h2>
            <p className="movie_list">
              <span>Movies</span>
              <span>Kannada</span>
              <span>Comedy</span>
            </p>
            <p className="para">
              A common man's police complaint about his missing shadow prompts
              the police to reopen the case of a road accident that might have
              been a murder.
            </p>
            <p>
              <button>Play</button>
              <button className="buy_plan">Buy Plan</button>
            </p>
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default SliderComponent;
