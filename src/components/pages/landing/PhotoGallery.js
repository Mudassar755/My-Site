import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
                src="https://source.unsplash.com/random/560x560"
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
                src="https://source.unsplash.com/random/560x560"
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" data-height="561" data-width="561" onClick={handleShow}>
              <Image
                src="https://source.unsplash.com/random/561x561"
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="562" data-width="562">
              <Image
                src="https://source.unsplash.com/random/562x562"
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
                src="https://source.unsplash.com/random/563x563"
                alt=""
               fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="564" data-width="564">
              <Image
                src="https://source.unsplash.com/random/564x564"
                alt=""
                fluid
              />
            </a>
          </Col>

          <Col md = {4}>
            <a href="!#" onClick={handleShow} data-height="565" data-width="565">
              <Image
                src="https://source.unsplash.com/random/565x565"
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
