import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            TypoCode
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Item>
              <Nav.Link>
                {" "}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Link>
              {" "}
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </Nav.Link>
            {/* <Nav.Link >
              {" "}
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </Nav.Link> */}
            <Nav.Link>
              {" "}
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        {/* <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </Navbar>
  );
}

export default AppNavbar;
