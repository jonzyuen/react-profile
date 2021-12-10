import React
// , { useState } 
from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Header(props) {
  const {
    // projectsSelected,
    setProjectsSelected,
    // aboutSelected,
    setAboutSelected,
    // contactSelected,
    setContactSelected
  } = props;

  return (
    <header>
      <Navbar variant='dark' bg='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href='#'><h1>Jonathan Yuen</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav>
              <Nav.Link href='#' onClick={() => {
                setProjectsSelected(false); 
                setAboutSelected(false); 
                setContactSelected(false);
              }}>Home</Nav.Link>
              
              <Nav.Link href='#' onClick={() => {
                setProjectsSelected(true);
                setAboutSelected(false);
                setContactSelected(false);
              }}>Projects</Nav.Link>

              <Nav.Link href='#' onClick={() => {
                setProjectsSelected(false);
                setAboutSelected(true);
                setContactSelected(false);
              }}>About Me</Nav.Link>

              <Nav.Link href='#' onClick={() => {
                setProjectsSelected(false);
                setAboutSelected(false);
                setContactSelected(true);
              }}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;