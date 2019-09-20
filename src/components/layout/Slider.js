import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import moduleName from "module";

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item className="carousel-image-1">
        <Carousel.Caption className=" d-none d-sm-block mb-5 text-right mb-5 ">
          <div class="container">
            <h1 class="display-3">Heading One</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              aperiam vel ullam deleniti reiciendis ratione quod aliquid
              inventore vero perspiciatis.
            </p>
            <a href="#" class="btn btn-danger btn-lg">
              Sign Up Now
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-2">
        <Carousel.Caption className=" d-none d-sm-block mb-5 ">
          <h1 class="display-3">Heading Two</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <a href="#" class="btn btn-primary btn-lg">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-image-3">
        <Carousel.Caption className="text-right mb-5  d-none d-sm-block mb-5">
          <h1 class="display-3">Heading Three</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aperiam vel ullam deleniti reiciendis ratione quod aliquid inventore
            vero perspiciatis.
          </p>
          <a href="#" class="btn btn-success btn-lg">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
