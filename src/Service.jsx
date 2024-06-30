// src/components/Service.jsx
import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import './service.css';

const Service = () => {
  return (
    <section className="services">
      <div className="container">
      <h1 className="text-center mt-0 mb-5">Our Services</h1>
      <div className="row">
          {Sdata.map(service => (
            <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
              <Card
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                imgSrc={service.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
