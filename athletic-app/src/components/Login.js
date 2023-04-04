import { useState, setState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../services/firebase/fb-config";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser).catch((err) =>
            alert(err.message)
          );
        }
      })
      .catch((err) => setError(err.message));
  };

  const logout = async () => {
    await signOut(auth);
  };

  function validateEmail(event) {
    if (!event.target.value.endsWith("@stevens.edu")) {
      event.target.setCustomValidity("Must login with your stevens email.");
    } else {
      event.target.setCustomValidity("");
    }
  }

  return (
    <div id="login">
      <Form id="login-form" onSubmit={login}>
        <Form.Group
          id="login-email"
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label> Email address </Form.Label>{" "}
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>{" "}
        <Button variant="dark" type="submit" onClick={() => setState("events")}>
          Log In{" "}
        </Button>{" "}
      </Form>{" "}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
