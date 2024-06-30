// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imgSrc, buttonText }) => {
  return (
    <div className="card shadow">
      <img src={imgSrc} className="card-img-top" alt="Service" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}

export default Card;
