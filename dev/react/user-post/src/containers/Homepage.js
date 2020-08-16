import React from 'react';
import Home from '../components/home.component';
import About from '../components/about.component';
import Portfolio from '../components/portfolio.component';
import Testimonial from '../components/testimonial.component';
import Contact from '../components/contact.component';

export default function Homepage() {
  return (
    <div>
      <Home />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}
