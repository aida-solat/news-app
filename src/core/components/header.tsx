import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/header.css"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getArticles } from '../service/api';

const Header = () => {


  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">
          <img
            src={require('../assets/images/NORDICROSE.png')}
            className="logo mt-4 mb-4 justify-content-start"
            alt="logo"
          />
        </Navbar.Brand>


        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            onChange={(e) => {
              e.preventDefault();
              getArticles();
            }
            }
            variant="outline-success"
            className="search-button"


          >Search</Button>
        </Form>

        <Nav className="justify-content-end text-uppercase nav-container" activeKey="/home">

        


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