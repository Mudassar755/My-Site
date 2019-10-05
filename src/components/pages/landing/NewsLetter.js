import React from "react";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

function NewsLetter() {
  return (
    <section id="newsletter" class="text-center p-5 bg-dark text-white">
      <Container>
        <Row>
          <Col>
            <h1>Sign Up For Our Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              asperiores consectetur, quae ducimus voluptates vero repellendus
              architecto maiores recusandae mollitia?
            </p>

            <form class="form-inline justify-content-center">
                <input
                  type="text"
                  name="name"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  name="email"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Email"
                />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
