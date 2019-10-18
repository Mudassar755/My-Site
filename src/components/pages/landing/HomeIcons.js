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
          {/* <i className="fas fa-cog fa-3x mb-2"></i> */}
          <i className="fas fa-laptop-code fa-3x mb-2"></i>
          <h3>Web Development</h3>
          <p>We will develop a Stunning Web Application with React.Js and Node.Js</p>
        </Col>
        <Col md ={4} className="mb-4 text-center">
          {/* <i className="fas fa-cloud fa-3x mb-2"></i> */}
          <i className="fas fa-mobile-alt fa-3x mb-2" ></i>
          <h3>Mobile App Development</h3>
          <p>We will develop an iOS / android Mobile App with React-Native</p>
        </Col>
        <Col md ={4} className="mb-4 text-center">
          {/* <i className="fas fa-cart-plus fa-3x mb-2"></i> */}
          <i className="fas fa-bug fa-3x mb-2"></i>
          <h3>Bug Fixing</h3>
          <p>We will fix bugs in your React.Js Web or Native-App</p>
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
