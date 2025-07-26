import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "UI/UX Design", level: 70 },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills animate-fade-up visible">
      <Container>
        <h2>Skills</h2>
        <Row>
          {skills.map(({ name, level }) => (
            <Col md={6} key={name}>
              <h5>{name}</h5>
              <div className="progress">
                <div className="progress-bar" style={{ width: `${level}%` }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
