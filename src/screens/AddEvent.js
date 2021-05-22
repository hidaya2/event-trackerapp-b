import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";

function AddEvent() {
  const { user } = useContext(UserContext);

  const [event, setEvent] = useState("");
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: user.token,
      },
    };
    await axios.post(
      "https://event-tracker-b.herokuapp.com/api/v2/event",
      {
        event,
        location,
        day,
        note,
      },
      config
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xl={4} lg={4} md={6} sm={12}>
          <Form className="add-event" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                onChange={(e) => setEvent(e.target.value)}
                placeholder="enter your event "
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                onChange={(e) => setLocation(e.target.value)}
                placeholder="enter the locaton "
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                onChange={(e) => setDay(e.target.value)}
                placeholder="enter the day "
              ></Form.Control>
            </Form.Group>
            <Form.Control
              onChange={(e) => setNote(e.target.value)}
              placeholder="note "
            ></Form.Control>
            <Button type="submit" className="mt-4">
              SAVE
            </Button>
          </Form>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default AddEvent;
