import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://k.nooncdn.com/cms/pages/20220622/0a83a24f4e7b89d6a685c6da80908921/en_teaser-slider-01.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://k.nooncdn.com/cms/pages/20220613/3b0496e2ba9631d1a62cde36d5e6d209/en_banner-04.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://k.nooncdn.com/cms/pages/20220622/320aa2a8646b18811cb517c2c78a04a4/en_banner-01.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://k.nooncdn.com/cms/pages/20220614/87d46aeda0e08e5ac5705e76aa89892e/en_banner-01.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
