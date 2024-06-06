import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slideshow() {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Prima Creazione</h3>
            <p>Descrizione della prima creazione.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Seconda Creazione</h3>
            <p>Descrizione della seconda creazione.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
