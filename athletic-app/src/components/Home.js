import { useState } from 'react'
import carousel1 from "../img/Schaefer_Center.jpg";
import carousel2 from "../img/Athletes.jpg";
import carousel3 from "../img/Field_Aerial.jpg";

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div id="home">
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Get Active</h3>
            <p>See what activities are available on campus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Get Connected</h3>
            <p>Share your Duck Pride by attending events</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Get Started</h3>
            <p>Sign up now to check out the upcoming events</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
