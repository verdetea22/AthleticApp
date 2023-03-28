import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp({ signup }) {
  function validateEmail(event) {
    if (!event.target.value.endsWith("@stevens.edu")) {
      event.target.setCustomValidity("Must sign up with your stevens email.");
    } else {
      event.target.setCustomValidity("");
    }
  }

  function submitSignup(event) {
    const form = event.target;
    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      signup();
    }
  }

  return (
    <div id="signup">
      <Form id="signup-form" onSubmit={submitSignup}>
        <label>
          <p>
            Welcome! <br></br>Please out the following <br />
          </p>{" "}
        </label>{" "}
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label> First Name </Form.Label>{" "}
          <Form.Control type="name" placeholder="First Name" required />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label> Last Name </Form.Label>{" "}
          <Form.Control type="name" placeholder="Last Name" required />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="CWID">
          <Form.Label> CWID </Form.Label>{" "}
          <Form.Control type="cwid" placeholder="Campus Wide I.D" required />
        </Form.Group>{" "}
        <Form.Group
          id="signup-email"
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label> Email address </Form.Label>{" "}
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={validateEmail}
            required
          />
          <Form.Text className="text-muted">
            Must be your Stevens email address.{" "}
          </Form.Text>{" "}
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Password </Form.Label>{" "}
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>{" "}
        <Button variant="dark" type="submit">
          Sign Up{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
}

export default SignUp;
