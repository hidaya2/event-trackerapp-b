import React, { useState, useContext,useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";

import { Link } from 'react-router-dom';

const RegisterUserScreen = ({location, history}) => {
  const { registerUser, user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



 const redirect = location.search ? location.search.split("=")[1] : "/";
 

  useEffect(() => {
    if (user.token) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="justify-center border border-black mt-5 p-3"
          >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>name</Form.Label>
              <FormControl
                placeholder="enter name"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>email</Form.Label>
              <FormControl
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>password</Form.Label>
              <Form.Control
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            </FormGroup>
            <Button type="submit">SIGN UP</Button>
            <p>Already have an account? <Link to="/login">Login Here!</Link></p>

          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterUserScreen;
