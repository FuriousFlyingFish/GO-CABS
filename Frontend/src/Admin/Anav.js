// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Anav = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: 'black' }}>
      <Container>
        <Navbar.Brand href="/">GO-CABS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ahome" className="btn btn-outline-light mx-2">Home</Link>
            <Link to="/users" className="btn btn-outline-light mx-2">Users</Link>
            <Link to="/acabs" className="btn btn-outline-light mx-2">Cabs</Link>
            <Link to="/addcab" className="btn btn-outline-light mx-2">AddCab</Link>
            <Link to="/" className="btn btn-outline-light mx-2">(Logout)</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anav;

