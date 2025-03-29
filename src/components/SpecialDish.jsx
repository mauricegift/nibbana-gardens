import React from 'react';
import { Link } from 'react-router-dom';
import specialDishBanner from '../assets/images/special-dish-banner.jpg';
import badge1 from '../assets/images/badge-1.png';
import shape4 from '../assets/images/shape-4.png';
import shape9 from '../assets/images/shape-9.png';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="special-dish-heading">
      <div className="special-dish-banner">
        <img 
          src={specialDishBanner} 
          width="940" 
          height="900" 
          loading="lazy" 
          alt="Lobster Tortellini special dish" 
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img 
            src={badge1} 
            width="28" 
            height="41" 
            loading="lazy" 
            alt="Special dish badge" 
            className="abs-img" 
            aria-hidden="true"
          />
          <p className="section-subtitle label-2">Special Dish</p>  
<h2 id="special-dish-heading" className="headline-1 section-title">Lobster Tortellini</h2>  
<p className="section-text">  
  Succulent lobster nestled in delicate handmade pasta, bathed in a velvety saffron-infused cream sauce.<br />  
  Each bite is a harmony of sweet, briny flavors, elevated by fresh herbs and a whisper of truffle.  
</p>  
          <div className="wrapper">
            <del className="del body-3" aria-label="Original price Ksh 5120.00">Ksh 5120.00</del>
            <span className="span body-1" aria-label="Special price Ksh 2520.00">Ksh 2560.00</span>
          </div>
          <Link to="/" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>
            <span className="text text-2" aria-hidden="true">View All Menu</span>
          </Link>
        </div>
      </div>

      <img 
        src={shape4} 
        width="179" 
        height="359" 
        loading="lazy" 
        alt="" 
        className="shape shape-1" 
        aria-hidden="true"
      />
      <img 
        src={shape9} 
        width="351" 
        height="462" 
        loading="lazy" 
        alt="" 
        className="shape shape-2" 
        aria-hidden="true"
      />
    </section>
  );
};

export default SpecialDish;