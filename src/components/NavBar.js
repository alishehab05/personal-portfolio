import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'connect'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="md" fixed="top" className={scrolled ? 'navbar scrolled' : 'navbar'} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ali Shehab</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={active === 'home' ? 'active navbar-link' : 'navbar-link'}
              // No onClick needed here
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={active === 'skills' ? 'active navbar-link' : 'navbar-link'}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={active === 'connect' ? 'active navbar-link' : 'navbar-link'}
            >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
