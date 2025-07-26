import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import profilePic from '../assets/img/profpic.jpg';

export const Banner = () => {
  return (
    <section id="home" className="banner" style={{ padding: '80px 0' }}>
      <Container>
        <Row className="align-items-center">
          
          {/* Left side - Text */}
          <Col md={6}>
            <h1>Hi! I'm Ali Shehab</h1>
            <p>I'm a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.</p>
            <Button href="#connect" className="mt-3">
              Let’s Connect <ArrowRightCircle size={25} />
            </Button>
          </Col>

          {/* Right side - Larger Profile Picture */}
          <Col md={6} className="text-center">
            <img 
              src={profilePic}
              alt="Ali Shehab Profile"
              style={{ 
                maxWidth: '350px', // Increased from 250px to 350px
                width: '100%', 
                borderRadius: '50%', 
                boxShadow: '0 10px 30px rgba(61,169,252,0.7)' 
              }}
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};
