import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUserCheck } from "react-icons/fa";
import Logo from "../assets/logo.png";

function AppBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid className="-mt-11">
          <Navbar.Brand href="#" className="">
            <img src={Logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">App Bar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center pt-4 gap-6 flex-grow-1">
                <Nav.Link href="#action1" className="active nav-links">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-links">
                  Courses
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-links">
                  Events
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-links">
                  Workshop
                </Nav.Link>
                <Nav.Link href="#action2" className="nav-links">
                  Gallery
                </Nav.Link>
              </Nav>
              <Button className="register-btn mt-4">
                <div className="btn-icon">
                  <FaUserCheck />
                </div>
                <div className="ps-3">Register Now</div>
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
