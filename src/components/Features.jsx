import React from 'react';
import feature1 from '../assets/images/features-icon-1.png';
import feature2 from '../assets/images/features-icon-2.png';
import feature3 from '../assets/images/features-icon-3.png';
import feature4 from '../assets/images/features-icon-4.png';
import shape7 from '../assets/images/shape-7.png';
import shape8 from '../assets/images/shape-8.png';

const Features = () => {
  const features = [
    {
      icon: feature1,
      title: "Hygienic Food",
      text: "Hygiene is our top priority in order to observe your health.",
      id: "hygienic-food"
    },
    {
      icon: feature2,
      title: "Fresh Environment",
      text: "At Nibbana Gardens the environment is so fresh and cool offering a soothing relaxation scene.",
      id: "fresh-environment"
    },
    {
      icon: feature3,
      title: "Skilled Chefs",
      text: "We have most of the skilled chefs to make you mouthwatering plata.",
      id: "skilled-chefs"
    },
    {
      icon: feature4,
      title: "Event & Party",
      text: "We offer and host outstanding events and parties.",
      id: "event-party"
    }
  ];

  return (
    <section className="section features text-center" aria-labelledby="features-heading">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 id="features-heading" className="headline-1 section-title">Our Strength</h2>

        <div className="grid-list" role="list">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item" role="listitem">
              <article className="feature-card">
                <div className="card-icon">
                  <img 
                    src={feature.icon} 
                    width="100" 
                    height="80" 
                    loading="lazy" 
                    alt="" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="title-2 card-title">{feature.title}</h3>
                <p className="label-1 card-text">{feature.text}</p>
              </article>
            </div>
          ))}
        </div>

        <img 
          src={shape7} 
          width="208" 
          height="178" 
          loading="lazy" 
          alt="" 
          className="shape shape-1" 
          aria-hidden="true"
        />
        <img 
          src={shape8} 
          width="120" 
          height="115" 
          loading="lazy" 
          alt="" 
          className="shape shape-2" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Features;