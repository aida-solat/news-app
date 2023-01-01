import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/header.css";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <>
      {[false, "sm", "md"].map((expand, key) => (
        <Navbar
          key={key}
          bg='light'
          expand={expand}
          className='mb-3'
          fixed='top'
        >
          <Container fluid>
            <Navbar.Brand href='/news-app'>
              <Image
                src={require("../assets/images/NORDICROSE.png")}
                className='logo justify-content-start'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  NORDIC ROSE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className='justify-content-end flex-grow-1 pe-3 text-uppercase nav-container'
                  activeKey='/home'
                >
                  <Nav.Item>
                    <Nav.Link href='/home'>Blog</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey='link-1'>About</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey='link-2'>Links</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey='link-3'>Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
