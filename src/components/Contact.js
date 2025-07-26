import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="contact" style={{ padding: '80px 0', textAlign: 'center' }}>
      <Container>
        <h2>Let's Connect!</h2>
        <p>You can reach me through my social profiles below:</p>
        
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button
              variant="outline-primary"
                href="https://www.linkedin.com/in/ali-al-rida-shehab-4aa894375"
              target="_blank"
              style={{ margin: '10px' }}
            >
              <FaLinkedin size={24} /> LinkedIn
            </Button>
          </Col>

          <Col xs="auto">
            <Button
              variant="outline-dark"
              href="https://github.com/alishehab05"
              target="_blank"
              style={{ margin: '10px' }}
            >
              <FaGithub size={24} /> GitHub
            </Button>
          </Col>

          <Col xs="auto">
            <Button
              variant="outline-danger"
              href="https://www.instagram.com/ali_r.ida?igsh=cGtic3JxZHA0Ynh3&utm_source=qr"
              target="_blank"
              style={{ margin: '10px' }}
            >
              <FaInstagram size={24} /> Instagram
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
