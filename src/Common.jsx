// src/components/Common.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Common.css';

const Common = (props) => {
  return (
    <section id="header" className="bg-light py-5 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 text-center">
            <h1 className="display-4">
              {props.name} <strong style={{ color: '#565387' }}>Hassan Patel</strong>
            </h1>
            <p className="lead my-4">
              We are a team of talented developers making amazing websites.
            </p>
            <div className="mt-4">
              <NavLink to={props.visite} className="btn-custom btn-transparent">{props.btname}</NavLink>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center">
            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common;
