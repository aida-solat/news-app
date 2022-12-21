import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.scss';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NORDIC ROSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="/">
            <Nav.Link href="/">BLOG</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">LINKS</Nav.Link>
            <Nav.Link href="#">PROJECTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;