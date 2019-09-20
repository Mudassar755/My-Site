import React, {useState} from "react";
import { Modal } from 'react-bootstrap'

function VideoSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <section id="video-play">
      <div class="dark-overlay">
        <div class="row">
          <div class="col">
            <div class="container p-5">
              <a onClick = {handleShow}
                href="#"
                class="video"
              >
                <i class="fas fa-play fa-3x"></i>
              </a>
              <h1>See What We Do</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Video Modal */}

    <Modal show={show} onHide={handleClose}>
        
        <Modal.Body><iframe src="https://www.youtube.com/embed/HnwsG9a5riA" frameborder="0" height="350" width="100%" allowfullscreen></iframe></Modal.Body>
        
      </Modal>
      </div>
  );
}

export default VideoSection;
