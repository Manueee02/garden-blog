import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Gallery() {
  const images = [
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/300x200'
  ];

  return (
    <Container>
      <h2>Gallery</h2>
      <Row>
        {images.map((src, index) => (
          <Col xs={12} md={4} key={index} className="mb-4">
            <Image src={src} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
