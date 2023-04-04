import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../services/firebase/fb-config";

function SignUp() {
  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function validateEmail(event) {
      if (!event.target.value.endsWith("@stevens.edu")) {
        event.target.setCustomValidity("Must sign up with your stevens email.");
      } else {
        event.target.setCustomValidity("");
        setRegisterEmail(event.target.value);
      }
    }

    const validatePassword = () => {
      let isValid = true;
      if (password !== "" && confirmPassword !== "") {
        if (password !== confirmPassword) {
          isValid = false;
          setError("Passwords does not match");
        }
      }
      return isValid;
    };

    function submitSignup(event) {
      const form = event.target;
      if (form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        signup();
      }
    }

    const register = (e) => {
      e.preventDefault();
      setError("");
      if (validatePassword()) {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            sendEmailVerification(auth.currentUser).catch((err) =>
              alert(err.message)
            );
          })
          .catch((err) => setError(err.message));
      }
      setEmail("");
      setPassword("");
      submitSignup;
    };

    return (
      <div className="center">
        <Form onSubmit={register} name="registration_form">
          <p>
            Welcome! <br />
            Please out the following <br />
          </p>{" "}
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
            <Form.Control
              type="cwid"
              placeholder="Campus Wide I.D"
              required
              minLength="8"
            />
          </Form.Group>{" "}
          <Form.Group
            id="signup-email"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label> Email address </Form.Label>{" "}
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Must be your Stevens email address.{" "}
            </Form.Text>{" "}
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              minLength="6"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Must be be six characters long.{" "}
            </Form.Text>{" "}
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Retype Password </Form.Label>{" "}
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              minLength="6"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Both passwords must match.{" "}
            </Form.Text>{" "}
          </Form.Group>{" "}
          <Button variant="dark" type="submit">
            Sign Up{" "}
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default SignUp;
