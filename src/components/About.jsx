import React from 'react';
import { Link } from 'react-router-dom';
import aboutBanner from '../assets/images/about-banner.jpg';
import aboutAbsImage from '../assets/images/about-abs-image.jpg';
import badge2 from '../assets/images/badge-2.png';
import shape3 from '../assets/images/shape-3.png';

const About = () => {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
          <p className="section-text">
  Nibbana, meaning "ultimate bliss" in Sanskrit, embodies our vision of creating a sanctuary where culinary excellence meets serene relaxation. Founded in 2010, our restaurant has redefined luxury dining with our signature farm-to-table philosophy and breathtaking resort setting.
  
  <br /><br />
  
  Beyond our award-winning kitchen, guests enjoy access to our tropical oasis featuring:
  <ul className="about-amenities">
    <li>• Three temperature-controlled infinity pools overlooking the mountains</li>
    <li>• A adults-only serenity pool with underwater music system</li>
    <li>• Family lagoon pool with waterfall and swim-up bar</li>
    <li>• Private cabana dining by our koi pond</li>
  </ul>
  
  Our executive chef Rama Krishnan blends ancient Ayurvedic principles with modern gastronomy, crafting dishes that nourish both body and soul. Every element - from our organic herb garden to our hand-carved teak furnishings - is designed to transport you to a state of perfect harmony.
</p>
          <div className="contact-label">Book Through Call</div>
          <a href="tel:+254711111111" className="body-1 contact-number hover-underline">+254711111111</a>
          <Link to="/" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </Link>
        </div>

        <figure className="about-banner">
          <img 
            src={aboutBanner} 
            width="570" 
            height="570" 
            loading="lazy" 
            alt="Our restaurant interior" 
            className="w-100" 
            data-parallax-item 
            data-parallax-speed="1" 
          />

          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img 
              src={aboutAbsImage} 
              width="285" 
              height="285" 
              loading="lazy" 
              alt="" 
              className="w-100" 
              aria-hidden="true"
            />
          </div>

          <div className="abs-img abs-img-2 has-before">
            <img 
              src={badge2} 
              width="133" 
              height="134" 
              loading="lazy" 
              alt="" 
              aria-hidden="true"
            />
          </div>
        </figure>

        <img 
          src={shape3} 
          width="197" 
          height="194" 
          loading="lazy" 
          alt="" 
          className="shape" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default About;