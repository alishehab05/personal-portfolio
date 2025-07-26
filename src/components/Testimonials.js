import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '80px 0', backgroundColor: '#161b22', color: '#c9d1d9' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#58a6ff' }}>What People Say</h2>
        <Row>
          <Col md={6}>
            <Card className="bg-dark text-light border-secondary mb-4">
              <Card.Body>
                <Card.Text>
                  "Ali is an outstanding developer. He delivered high-quality work on time and was a pleasure to work with."
                </Card.Text>
                <Card.Footer className="text-muted">— Client A</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="bg-dark text-light border-secondary mb-4">
              <Card.Body>
                <Card.Text>
                  "He transformed our old website into a sleek, modern platform that our users love."
                </Card.Text>
                <Card.Footer className="text-muted">— Client B</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
