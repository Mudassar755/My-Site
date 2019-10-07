import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            name="firstName"
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            name="lastName"
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter Email"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name="phone"
            type="text"
            placeholder="Phone Number"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            required
            placeholder="Enter Address"
            name="address"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="12" controlId="validationCustom02">
      <Button className = "btn-block" variant="secondary" size="lg" type = "submit">
      Submit
    </Button>
    </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default ContactForm;
