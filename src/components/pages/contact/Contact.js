import React from 'react';
import person1 from '../../../img/person1.jpg'
import person2 from '../../../img/person2.png'
import person3 from '../../../img/person3.jpg'
import person4 from '../../../img/person4.png'
import person5 from '../../../img/person5.png'

//react-bootstrap
import { Image, Container, Row, Col, Card } from 'react-bootstrap';
//contact-form
import ContactForm from './ContactForm'

import Fade from "react-reveal/Fade";
// import Slide from 'react-reveal/Slide';

const Contact = () => {

  return (
    <div>
     <header id="page-header">
    <Container>
      <Row >
        <Col md = {6} className="m-auto text-center">
          <h1>Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </Col>
      </Row>
    </Container>
  </header>
{/* Contact Section */}
<Fade right>
  <section id="contact" className="py-3">
    <Container>
      <Row >
        <Col md = {4}>
          <Card className="p-4">
            <Card.Body >
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
              <h4>Address</h4>
              <p>Faisalabad, Punjab, Pakistan</p>
              <h4>Email</h4>
              <p>developerpad86@gmail.com</p>
              <h4>Phone</h4>
              <p>(+92) (10) 6144542</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md = {8}>
          <Card className="p-4">
            <Card.Body>
              <h3 className="text-center">Please fill out this form to contact us</h3>
              <hr />
              <ContactForm />
          
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
</Fade>
{/* Staff Section */}
  <section id="staff" class="py-5 text-center bg-dark text-white">
    <Fade left>
    <Container >
      <h1>Our Team</h1>
      <hr />
      <Row >
        <Col md = {3}>
          <Image src={person1} alt=""  roundedCircle fluid />
          <h4>Talha Mughal</h4>
          <small>Sr.MERN Stack Developer</small>
        </Col>
        <Col md = {2}>
          <Image src={person2} alt=""  roundedCircle fluid />
          <h4>Wajid Shahid</h4>
          <small>MERN Stack Developer</small>
        </Col>
        <Col md = {2}>
          <Image src={person3} alt=""  roundedCircle fluid />
          <h4>Mudassar Ali</h4>
          <small>MERN Stack Developer</small>
        </Col>
        <Col md = {2}>
          <Image src={person4} alt=""  roundedCircle fluid />
          <h4>Mujahid Iqbal</h4>
          <small>MERN Stack Developer</small>
        </Col>
        <Col md = {3}>
          <Image src={person5} alt=""  roundedCircle fluid />
          <h4>Mubashir Hussain</h4>
          <small>Sr.MERN Stack Developer</small>
        </Col>
      </Row>
    </Container>
    </Fade>
  </section>
    </div>
  )
}

export default  Contact;
