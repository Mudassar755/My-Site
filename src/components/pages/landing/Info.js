import React from 'react';
import laptop from '../../../img/laptop.png';
import { Link } from 'react-router-dom'
//react-bootstrap
import { Image, Container, Row, Col } from 'react-bootstrap';

function Info() {
  return (
    <section id="info" className="py-3">
    <Container>
      <Row>
        <Col md = {6} className="align-self-center">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet blanditiis incidunt iusto corrupti illum
            cum laudantium ex sequi amet.</p>
          <Link to="/about" className="btn btn-outline-danger btn-lg">Learn More</Link>
        </Col>
        <Col md = {6}>
          <Image src={laptop} alt="" fluid />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default  Info;