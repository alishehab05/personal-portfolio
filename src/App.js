import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />

      {/* Home Section */}
      <section id="home" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Banner />
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Services />
      </section>

      {/* Testimonials Section (optional ID if you want to link) */}
      <section id="testimonials" style={{ paddingTop: '80px' }}>
        <Testimonials />
      </section>

      {/* Connect Section */}
      <section id="connect" style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Contact />
      </section>

      <Footer />
    </Router>
  );
}

export default App;
