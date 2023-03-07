import { useState } from 'react'
import carousel1 from "../img/Schaefer_Center.jpg";
import carousel2 from "../img/Athletes.jpg";
import carousel3 from "../img/Field_Aerial.jpg";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({login}) {

  function validateEmail(event) {
    if (!event.target.value.endsWith("@stevens.edu")) {
      event.target.setCustomValidity('Must login with your stevens email.');
    } else {
      event.target.setCustomValidity('');
    }
  }

  function submitLogin(event) {
    const form = event.target;
    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      login();
    }
  }

  return (
    <div id="login">
      <Form id="login-form" onSubmit={submitLogin}>
        <Form.Group id="login-email" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={validateEmail} required/>
          <Form.Text className="text-muted">
            Must be your Stevens email address.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="dark" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
