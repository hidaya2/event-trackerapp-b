import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddEvent () {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter your event "></Form.Control>
        <Form.Control placeholder="enter the locaton "></Form.Control>
        <Form.Control placeholder="enter the day "></Form.Control>
        <Form.Control placeholder="note "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
}

export default AddEvent;
