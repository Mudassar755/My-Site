import React from 'react';
//react-bootstrap
import { Image, Container, Row, Col } from 'react-bootstrap';
import banner from '../../img/banner.jpg';
import img from '../../img/about.jpeg';


import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

 function About() {
  return (
    <div>
  <header id="page-header">
    <Container >
      <Row >
        <Col md ={6} className="m-auto text-center">
          <h1>About Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </Col>
      </Row>
    </Container>
  </header>
  <Slide bottom >
  <section id="about" class="py-3">
    <Container>
      <Row >
        <Col md = {6}>
          <h1>What We Do</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
            error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
            laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
            praesentium temporibus adipisci debitis labore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
            error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
            laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
            praesentium temporibus adipisci debitis labore!</p>
        </Col>
        <Col md = {6}>
          <Image 
          src={banner} 
          // src="https://source.unsplash.com/random/700x700/?technology" 
          alt="" fluid roundedCircle className="d-none d-md-block about-img" />
        </Col>
      </Row>
    </Container>
  </section>
</Slide>
  <section id="icon-boxes" class="p-5">
    <Container>
      <Fade bottom>
      <Row className="mb-4">
        <Col md = {4}>
          <div class="card bg-danger text-white text-center">
            <div class="card-body">
              <i class="fas fa-building fa-3x"></i>
              <h3>Mobile App</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
        <Col md = {4}>
          <div class="card bg-dark text-white text-center">
            <div class="card-body">
              <i class="fas fa-bullhorn fa-3x"></i>
              <h3>Web Application</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
        <Col md = {4}>
          <div class="card bg-danger text-white text-center">
            <div class="card-body">
              <i class="fas fa-comments fa-3x"></i>
              <h3>Progressive Web App</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
      </Row>
        </Fade>
        <Fade bottom>
      <Row className="mb-4">
        <Col md ={4}>
          <div class="card bg-dark text-white text-center">
            <div class="card-body">
              <i class="fas fa-box fa-3x"></i>
              <h3>Single Page App</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
        <Col md = {4}>
          <div class="card bg-danger text-white text-center">
            <div class="card-body">
              <i class="fas fa-credit-card fa-3x"></i>
              <h3>E-Commerce</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
        <Col md = {4}>
          <div class="card bg-dark text-white text-center">
            <div class="card-body">
              <i class="fas fa-coffee fa-3x"></i>
              <h3>Native App</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
            </div>
          </div>
        </Col>
      </Row>
      </Fade>
    </Container>
  </section>

  {/* TESTIMONIALS */}
  {/* <section id="testimonials" className="p-4 bg-dark text-white">
    <Container>
      <h2 className="text-center">testimonials</h2>
      <Row className="text-center">
        <Col >
          <div class="slider">
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">John Doe From
                  <cite title="Company 1">Company 1</cite>
                </footer>
              </blockquote>
            </div>
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">Sam Smith From
                  <cite title="Company 2">Company 2</cite>
                </footer>
              </blockquote>
            </div> 
            <div>
              <blockquote class="blockquote">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                </p>
                <footer class="blockquote-footer">Meghan Williams From
                  <cite title="Company 3">Company 3</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section> */}
    </div>
  )
}

export default About;
