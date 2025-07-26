import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Services = () => {
  return (
    <section id="services" style={{ padding: '80px 0', backgroundColor: '#0d1117', color: '#c9d1d9' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#58a6ff' }}>What I Do</h2>
        <Row>
          <Col md={4}>
            <Card className="bg-dark text-light border-secondary mb-4">
              <Card.Body>
                <Card.Title style={{ color: '#58a6ff' }}>Web Development</Card.Title>
                <Card.Text>
                  Building modern and responsive websites using React, Node.js, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-light border-secondary mb-4">
              <Card.Body>
                <Card.Title style={{ color: '#58a6ff' }}>Mobile Apps Creation</Card.Title>
                <Card.Text>
                  Developing cross-platform mobile applications with React Native and Flutter.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-light border-secondary mb-4">
              <Card.Body>
                <Card.Title style={{ color: '#58a6ff' }}>API Integration</Card.Title>
                <Card.Text>
                  Integrating RESTful APIs and third-party services into applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
