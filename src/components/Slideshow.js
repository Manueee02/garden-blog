import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img/slide1.jpg'
import img2 from './img/slide3.jpg'
import img3 from './img/slide2.jpg'
import img4 from './img/slide4.jpg'

function Slideshow() {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="First slide"
            style={{ objectFit: 'cover', height: '500px' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
            style={{ objectFit: 'cover', height: '500px' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Second slide"
            style={{ objectFit: 'cover', height: '500px' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
            style={{ objectFit: 'cover', height: '500px' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Aggiungi altri elementi di Carousel.Item se necessario */}
      </Carousel>
    </div>
  );
}

export default Slideshow;
