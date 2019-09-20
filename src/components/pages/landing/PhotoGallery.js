import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Magnifier from "react-magnifier";

function PhotoGallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="gallery" class="py-5">
      <div class="container">
        <h1 class="text-center">Photo Gallery</h1>
        <p class="text-center">Check out our photos</p>
        <div class="row mb-4">
          <div class="col-md-4">
            <Modal  show={show} onHide={handleClose}>
              <Modal.Body>
              <img
                src="https://source.unsplash.com/random/560x560"
                height="560"
                width="560"
              />
            </Modal.Body>
            </Modal>
            <a
              
              onClick={handleShow}
            >
              <img
                src="https://source.unsplash.com/random/560x560"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>

          <div class="col-md-4">
            <a data-height="561" data-width="561" onClick={handleShow}>
              <img
                src="https://source.unsplash.com/random/561x561"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>

          <div class="col-md-4">
            <a onClick={handleShow} data-height="562" data-width="562">
              <img
                src="https://source.unsplash.com/random/562x562"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-4">
            <a onClick={handleShow} data-height="563" data-width="563">
              <img
                src="https://source.unsplash.com/random/563x563"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>

          <div class="col-md-4">
            <a onClick={handleShow} data-height="564" data-width="564">
              <img
                src="https://source.unsplash.com/random/564x564"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>

          <div class="col-md-4">
            <a onClick={handleShow} data-height="565" data-width="565">
              <img
                src="https://source.unsplash.com/random/565x565"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
