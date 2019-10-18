import React, {useState} from "react";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

function NewsLetter() {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
  });
  const { name, email } = formData;
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = event => {
      event.preventDefault();
      // createMessage(formData);
    }

  
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

            <form className="form-inline justify-content-center" onSubmit = { e => handleSubmit(e)}>
                <input
                  type="text"
                  name="name"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Name"
                  value={name}
                  onChange = { e => handleChange(e)}
                />
                <input
                  type="text"
                  name="email"
                  class="form-control mb-2 mr-2"
                  placeholder="Enter Email"
                  value={email}
                  onChange = { e => handleChange(e)}

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
