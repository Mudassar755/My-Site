import React, { useState } from "react";
import project1 from "../../../img/imgGallery/project1.jpg";
import project2 from "../../../img/imgGallery/project2.jpg";
import project3 from "../../../img/imgGallery/project3.jpg";
import project4 from "../../../img/imgGallery/project4.jpg";
import img5 from "../../../img/imgGallery/img5.jpg";
import img6 from "../../../img/imgGallery/img6.jpg";
import img7 from "../../../img/imgGallery/img7.jpg";
// import Magnifier from "react-magnifier";
//react-bootstrap
import { Image, Container, Row, Col } from "react-bootstrap";

function PhotoGallery() {

  return (
    <section id="gallery" class="py-5">
      <Container>
        <h1 className="text-center">What We Did  </h1>
        <p className="text-center">Check out our Portfolio</p>
        <Row className="mb-4">
          <Col md={4}>
            <a
              href="https://online-shopping-store.herokuapp.com/"
              target="blank"
              data-height="562"
              data-width="562"
            >
              <Image src={project1} alt="" fluid />
            </a>
          </Col>
          <Col md={4}>
            <a
              href="https://online-shopping-store.herokuapp.com/admin"
              target="blank"              
              data-height="562"
              data-width="562"
            >
              <Image src={project2} alt="" fluid />
            </a>
          </Col>

          <Col md={4}>
            <a
              href="https://developerpad.herokuapp.com/"
              target="blank"
              data-height="562"
              data-width="562"
            >
              <Image src={project3} alt="" fluid />
            </a>
          </Col>

        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <a
              href="http://checkkrvao.herokuapp.com/c_cpp"
              target="blank"
              data-height="563"
              data-width="563"
            >
              <Image src={project4} alt="" fluid />
            </a>
          </Col>

          <Col md={4}>
            <a
              href="http://checkkrvao.herokuapp.com/c_cpp"
              data-height="564"
              data-width="564"
            >
              <Image src={img6} alt="" fluid />
            </a>
          </Col>

          <Col md={4}>
            <a
              href="http://checkkrvao.herokuapp.com/c_cpp"
              data-height="565"
              data-width="565"
            >
              <Image src={img7} alt="" fluid />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PhotoGallery;
