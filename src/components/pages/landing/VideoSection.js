import React, { useState } from "react";
//react-bootstrap
import { Container, Row, Col, Modal } from "react-bootstrap";

function VideoSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <section id="video-play">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="p-5">
                <a href="#" onClick={handleShow} className="video">
                  <i className="fas fa-play fa-3x"></i>
                </a>
                <h1>See What We Do</h1>
              </Container>
            </Col>
          </Row>
        </div>
      </section>

      {/* Video Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <iframe
            src="https://www.youtube.com/embed/MjxGwfa5lxw"
            frameborder="0"
            title="Video uploading..."
            height="350"
            width="100%"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoSection;
