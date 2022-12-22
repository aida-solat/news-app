import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <p className="text-left mt-4 mb-4 justify-content-start">NOEDIC ROSE</p>
      <Nav className="justify-content-end text-uppercase" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Links</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;