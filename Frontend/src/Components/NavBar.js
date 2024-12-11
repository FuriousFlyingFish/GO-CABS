import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="sec">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ backgroundColor: "LightBlue" }}>
        <Container>
          <Navbar.Brand href="/">Cab Booking App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/">User</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/alogin">Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
