import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pizza1 from "../images/pizza1.jpg"
import pizza2 from "../images/pizza2.jpg"
import pizza3 from "../images/pizza3.jpg"
 
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
const style = {
    objectFit : "cover"
}
  return (
    <Carousel  onSelect={handleSelect} >
      <Carousel.Item  className="carousel">
        <img
          className="d-block w-100"
          src={pizza1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="carousel">
        <img
          className="d-block w-100"
          src={pizza2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="carousel">
        <img
          className="d-block w-100"
          src={pizza3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
