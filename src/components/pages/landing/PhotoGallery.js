import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import img1 from '../../../img/imgGallery/img1.jpg';
import img2 from '../../../img/imgGallery/img2.jpg';
import img3 from '../../../img/imgGallery/img3.jpg';
import img4 from '../../../img/imgGallery/img4.jpg';
import img5 from '../../../img/imgGallery/img5.jpg';
import img6 from '../../../img/imgGallery/img6.jpg';
import img7 from '../../../img/imgGallery/img7.jpg';
// import Magnifier from "react-magnifier";
//react-bootstrap
import { Image, Container, Row, Col  } from "react-bootstrap";

function PhotoGallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="gallery" class="py-5">
      <Container >
        <h1 className="text-center">Photo Gallery</h1>
        <p className="text-center">Check out our photos</p>
        <Row className="mb-4">
          <Col md = {4}>
            <Modal  show={show} onHide={handleClose}>
              <Modal.Body>
              <Image
                src={img1}
                // src="https://source.unsplash.com/random/560x560"
                height="560"
                width="560"
              />
            </Modal.Body>
            </Modal>
            <a
              href="!#"
              onClick={handleShow}
            >
              <Image
                src={img2}
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" data-height="561" data-width="561" onClick={handleShow}>
              <Image
                src={img3}
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="562" data-width="562">
              <Image
                src={img4}
                alt=""
                fluid
              />
            </a>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="563" data-width="563">
              <Image
                src={img5}
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="564" data-width="564">
              <Image
                src={img6}
                alt=""
                fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="565" data-width="565">
              <Image
                src={img7}
                alt=""
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PhotoGallery;
