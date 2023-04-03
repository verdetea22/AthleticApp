import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebase/firebase-config";

function Login({}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  function validateEmail(event) {
    if (!event.target.value.endsWith("@stevens.edu")) {
      event.target.setCustomValidity("Must login with your stevens email.");
    } else {
      event.target.setCustomValidity("");
      setLoginEmail(event.target.value);
    }
  }

  function setPassword(event) {
    setLoginPassword(event.target.value);
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
        <Form.Group
          id="login-email"
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
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={setPassword}
            required
          />
        </Form.Group>{" "}
        <Button variant="dark" type="submit">
          Log In{" "}
        </Button>{" "}
      </Form>{" "}
    </div>
  );
}

export default Login;
