import React, { useState } from "react";

//react-bootstrap
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    file: ""
  });

  const { title, content, file } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handelFile = e => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("file", file);

    console.log(data);
  };

  return (
    <div>
      <header id="page-header">
        <Container>
          <Row>
            <Col className="m-auto text-center">
              <h1>Blogs</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="blog-form" className="py-3">
        <Container>
          <Row>
            <Col md={8}>
              <Card className="p-4">
                <Card.Body>
                  <h3 className="text-center">
                    Please fill out this form to contact us
                  </h3>
                  <hr />
                  <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Row>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Blog Title"
                          name="title"
                          onChange={e => handleChange(e)}
                          value={title}
                        />
                        
                      </Form.Group>
                      {/* <Form.Group> */}
                        <label>Image</label>
                        <input
                          type="file"
                          name="file"
                          onChange={e => handelFile(e)}
                          value={file}
                        />
                        
                      {/* </Form.Group> */}

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Blog Content</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="content"
                          onChange={e => handleChange(e)}
                          value={content}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Button
                          className="btn-block"
                          variant="secondary"
                          size="lg"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Form.Group>
                    </Form.Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CreateBlog;
