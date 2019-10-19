import React from "react";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

function HomeIcons() {
  return (
    <div>
      <section id="home-icons" className="py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4 text-center">
              {/* <i className="fas fa-cog fa-3x mb-2"></i> */}
              <i className="fas fa-laptop-code fa-3x mb-2"></i>
              <h3>Web Development</h3>
              <p>
                We are providing services in Web Application development,
                Personal Website, Business Sites,Single Page Applications(SPA).
              </p>
            </Col>
            <Col md={4} className="mb-4 text-center">
              {/* <i className="fas fa-cloud fa-3x mb-2"></i> */}
              <i className="fas fa-mobile-alt fa-3x mb-2"></i>
              <h3>Mobile App Development</h3>
              <p>
                We are also providing services in Mobile App Development for iOS
                / android with React-Native, Node.Js, MongoDb.
              </p>
            </Col>
            <Col md={4} className="mb-4 text-center">
              {/* <i className="fas fa-cart-plus fa-3x mb-2"></i> */}
              <i className="fas fa-bug fa-3x mb-2"></i>
              <h3>Bug Fixing</h3>
              <p>
                We are providing services in Removing bugs in existing Web
                Application or Mobile App
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="home-heading" class="p-5">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="pt-5">
                <h1>Are You Ready To Get Started?</h1>
                <p className="d-none d-md-block">
                  Are you ready to work with highly competent and passionate developers?
                  If Yes, contact with us today get any service we are providing.
                </p>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default HomeIcons;
