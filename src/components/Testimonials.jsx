import React from 'react';
import testiBg from '../assets/images/testimonial-bg.jpg';
import testiAvatar from '../assets/images/testi-avatar.jpg';

const Testimonials = () => {
  return (
    <section 
      className="section testi text-center has-bg-image" 
      style={{ backgroundImage: `url(${testiBg})` }} 
      aria-labelledby="testimonial-quote"
    >
      <div className="container">
        <div className="quote" aria-hidden="true">”</div>
        <blockquote>
          <p id="testimonial-quote" className="headline-2 testi-text">
            "I thank you for inviting me down for that amazing dinner the other night. The food was
            extraordinary."
          </p>
        </blockquote>
        
        <div className="wrapper" aria-hidden="true">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>
        
        <div className="profile">
          <img 
            src={testiAvatar} 
            width="100" 
            height="100" 
            loading="lazy" 
            alt="" 
            className="img"
            aria-hidden="true"
          />
          <p className="label-2 profile-name">
            <cite>Gifted Maurice</cite>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;