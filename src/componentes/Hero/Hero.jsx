import React from 'react';
import './Hero.css';

 function Hero(props) {
  return (
    <section className="hero">
      <h2>{props.titulo}</h2>
      <p>{props.subtitutlo}</p>
    </section>
  );
}

export default Hero