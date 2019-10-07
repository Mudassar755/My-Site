import React from 'react';
import person1 from '../../../img/person1.jpg'
import person2 from '../../../img/person2.jpg'
import person3 from '../../../img/person3.jpg'
import person4 from '../../../img/person4.jpg'
import avatar from '../../../img/avatar.png';
import avatar1 from '../../../img/avatar1.png';

//react-bootstrap
import { Image, Container, Row, Col } from 'react-bootstrap';
//contact-form
import ContactForm from './ContactForm'

import Fade from "react-reveal/Fade";
// import Slide from 'react-reveal/Slide';

const Contact = () => {

  return (
    <div>
     <header id="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto text-center">
          <h1>Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </div>
      </div>
    </div>
  </header>
{/* Contact Section */}
<Fade right>
  <section id="contact" class="py-3">
    <Container>
      <Row >
        <Col md = {4}>
          <div class="card p-4">
            <div class="card-body">
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
              <h4>Address</h4>
              <p>Faisalabad, Punjab, Pakistan</p>
              <h4>Email</h4>
              <p>developerpad86@gmail.com</p>
              <h4>Phone</h4>
              <p>(0310) 6144452</p>
            </div>
          </div>
        </Col>
        <Col md = {8}>
          <div class="card p-4">
            <div class="card-body">
              <h3 class="text-center">Please fill out this form to contact us</h3>
              <hr />
              <ContactForm />
          
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</Fade>
{/* Staff Section */}
  <section id="staff" class="py-5 text-center bg-dark text-white">
    <Fade left>
    <Container >
      <h1>Our Staff</h1>
      <hr />
      <Row >
        <Col md = {3}>
          <Image src={avatar} alt=""  roundedCircle fluid />
          <h4>Muzammil </h4>
          <small>Marketing Manager</small>
        </Col>
        <Col md = {3}>
          <Image src={avatar} alt=""  roundedCircle fluid />
          <h4>Waseem</h4>
          <small>Business Manager</small>
        </Col>
        <Col md = {3}>
          <Image src={avatar} alt=""  roundedCircle fluid />
          <h4>Mudassar Ali</h4>
          <small>CEO</small>
        </Col>
        <Col md = {3}>
          <Image src={avatar} alt=""  roundedCircle fluid />
          <h4>Bila</h4>
          <small>Web Developer</small>
        </Col>
      </Row>
    </Container>
    </Fade>
  </section>
    </div>
  )
}

export default  Contact;
