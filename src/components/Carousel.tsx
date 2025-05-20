import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';
const MyCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-custom">
            <img
              className="fixed-size-img"               
                src = {`${import.meta.env.BASE_URL}/image/5.jpg`}
                alt="First slide"
            />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img
            className="fixed-size-img"             
            src = {`${import.meta.env.BASE_URL}/image/6.jpg`}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-item-custom">
          <img
            className="fixed-size-img"             
            src = {`${import.meta.env.BASE_URL}/image/7.jpg`}
            alt="Second slide"
         />
        </div>
      </Carousel.Item>
      </Carousel>
  );
};
export default MyCarousel;
