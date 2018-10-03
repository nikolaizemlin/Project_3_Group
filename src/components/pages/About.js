import React from "react";
import { Carousel, Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

const About = () => (
  <div>
 
 <Carousel>
  <Carousel.Item>
    <img width='100%' height={400} alt="900x500" src="img/beerglasses.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width='100%' height={400} alt="900x500" src="img/blackandwhite.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width='100%' height={400} alt="900x500" src="img/wars.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width='100%' height={400} alt="900x500" src="img/123877.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;

<Grid>
  <Row>
    <Col xs={6} md={3}>
      <Thumbnail src="\img\nick.jpg" alt="242x200">
        <h3>Nick Hosley</h3>
        <p>Typed some Letters and symbols</p>
        <p>
          <Button bsStyle="primary" href="https://nikolaizemlin.github.io/Portfolio/" target="_blank">Button</Button>
          
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/img/meg.jpg" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/img/kenzie.jpg" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="/img/andy.jpg" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>;
  </div>
);

export default About;
