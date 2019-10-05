import React from 'react';
//react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

function HomeIcons() {
  return (
    <div>
    <section id="home-icons" className="py-5">
    <Container >
      <Row >
        <Col md = {4} className="mb-4 text-center">
          <i className="fas fa-cog fa-3x mb-2"></i>
          <h3>Turning Gears</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
        </Col>
        <Col md ={4} className="mb-4 text-center">
          <i className="fas fa-cloud fa-3x mb-2"></i>
          <h3>Sending Data</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
        </Col>
        <Col md ={4} className="mb-4 text-center">
          <i className="fas fa-cart-plus fa-3x mb-2"></i>
          <h3>Making Money</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
        </Col>
      </Row>
    </Container>
  </section>

  <section id="home-heading" class="p-5">
    <div className="dark-overlay">
      <Row>
        <Col>
          <Container className="pt-5">
            <h1>Are You Ready To Get Started?</h1>
            <p className="d-none d-md-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eaque magni sit dolores. Nisi, dolor nam modi perspiciatis
              consequatur soluta.</p>
          </Container>
        </Col>
      </Row>
    </div>
  </section>
  </div>
  )
}

export default  HomeIcons;
