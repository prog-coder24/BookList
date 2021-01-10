import React, { useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";

const Booklist = () => {
  const [name, setName] = useState("");

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    name.length < 3 ? setShow(true) : setData([...data, name]);
  };

  const handleRemove = (d) => {
    const op = data.filter((dt) => dt !== d);
    setData(op);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const mapper = data.map((d) => {
    return (
      <div className="book-wrapper d-flex justify-content-between mt-5 border p-3">
        <h4>{d}</h4>
        <Button
          variant="danger"
          onClick={() => {
            handleRemove(d);
          }}
        >
          Remove
        </Button>
      </div>
    );
  });

  return (
    <Container>
      <h1 className="my-5">BookList</h1>
      <Alert
        variant="danger"
        dismissible
        show={show}
        onClose={() => setShow(false)}
      >
        Book name is too short...!
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter book name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Add to your Book List
          </Button>
        </div>
      </Form>
      <div>
        {data.length > 0 ? (
          mapper
        ) : (
          <h3 className="empty mt-5 text-center text-muted">
            No books added yet :(
          </h3>
        )}
      </div>
    </Container>
  );
};

export default Booklist;
