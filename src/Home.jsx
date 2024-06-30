// src/components/Home.jsx
import React from 'react';
import './Home.css';
import web from './web.png';
import Common from './Common';

const Home = () => {
  return (
    <Common
      name='Grow your business with '
      imgsrc={web}
      visite='/service'
      btname='Get Started'
    />
  );
}

export default Home;
