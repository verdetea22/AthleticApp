import logo from "./img/Stevens-ducks-mascott-Attila.png";
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { MDBFooter, MDBContainer, MDBBtn} from 'mdb-react-ui-kit';

import Home from './components/Home.js'
import Login from './components/Login.js'
import Events from './components/Events.js'

function App() {
  const [state, setState] = useState('home')
  // to-do: distinguish between admin and student login
  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setState("events")
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <nav>
        <Navbar bg="light" sticky="top">
          <Container>
            <Navbar.Brand onClick={() => {setState('home')} } style={{ cursor: 'pointer' }}>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Stevens Ducks Athletic App
            </Navbar.Brand>
            <Nav className="navbuttons">
              {!loggedIn && <Button variant="dark" onClick={() => setState('login') }>Login</Button>}
              {!loggedIn && <Button variant="dark" onClick={() => setState('signup') }>Sign Up</Button>}
              {loggedIn && <Button variant="dark" onClick={() => setState('events') }>Events</Button>}
              {loggedIn && <Button variant="dark" onClick={() => setState('history') }>My History</Button>}
              {loggedIn && <Button variant="dark" onClick={() => {setState('home'); setLoggedIn(false)} }>Log Out</Button>}
            </Nav>
          </Container>
        </Navbar>
      </nav>
      
      <main>
        {state === "home" && <Home />}
        {state === "login" && <Login login={login}/>}
        {state === "events" && <Events />}
      </main>

      <br />
      <footer>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#800000' }}>
          <MDBContainer className='p-4 pb-0'>
            <section className=''>
              <p className='d-flex justify-content-center align-items-center'>
                <span className='me-3'>Get started now</span>
                <MDBBtn type='button' outline color="light" rounded onClick={() => setState('signup') }>
                  Sign Up
                </MDBBtn>
              </p>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: '#3C0008' }}>
            © 2023 Copyright: SSW 540 Group 1
          </div>
        </MDBFooter>
      </footer>
    </div>
  );
}

export default App;
