import React from 'react'
import logoblk from '../images/fpsblk.png'
import { Container, Nav, Navbar, NavDropdown, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NewHeader = () => {
  return (
    <div>
    <Navbar bg="black" variant={"dark"} expand="lg">
      <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>
                <img src={logoblk} alt="black logo" style={{width: '60vw', maxWidth: '300px'}}/>
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-4 fw-normal">
            <NavDropdown title="Adopt a pet" id="basic-nav-dropdown" className="fs-4">
              <LinkContainer to="/adopt/cats"><NavDropdown.Item href="#action/3.1">Cats</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/adopt/dogs"><NavDropdown.Item href="#action/3.2">Dogs</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/adopt/rabbits"><NavDropdown.Item href="#action/3.3">Rabbits</NavDropdown.Item></LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NewHeader