import React from 'react';
import { Link } from 'react-router-dom';
import heroIcon from '../assets/images/hero-icon.png';
import slider1 from '../assets/images/hero-slider-1.jpg';

const Hero = () => {
  return (
    <section className="hero text-center" aria-label="home" id="home">
      <div className="slider-item active">
        <div className="slider-bg">
          <img 
            src={slider1} 
            width="1880" 
            height="950" 
            alt="Delicious food presentation" 
            className="img-cover" 
          />
        </div>

        <p className="label-2 section-subtitle slider-reveal">Modern, Flavouring & Hygienic</p>
        <h1 className="display-1 hero-title slider-reveal">
          For the love of delicious Meals and Recreations
        </h1>
        <p className="body-2 hero-text slider-reveal">
          Come with Family/Friends & Feel the Joy of Mouthwatering Plata
        </p>

        <Link to="/" className="btn btn-primary slider-reveal">
          <span className="text text-1">View Our Menu</span>
          <span className="text text-2" aria-hidden="true">View Our Menu</span>
        </Link>
      </div>

      <Link to="/" className="hero-btn has-after">
        <img 
          src={heroIcon} 
          width="48" 
          height="48" 
          alt="" 
          aria-hidden="true"
        />
        <span className="label-2 text-center span">Book A Table</span>
      </Link>
    </section>
  );
};

export default Hero;