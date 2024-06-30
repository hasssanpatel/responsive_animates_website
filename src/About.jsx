// src/components/About.jsx
import React from 'react';
import about from './about.png';
import Common from './Common';

const About = () => {
  return (
    <Common
      name='Welcome to About Page '
      imgsrc={about}
      visite='/contact'
      btname='Contact Now'
    />
  );
}

export default About;
