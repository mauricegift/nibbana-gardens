import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

const Service = () => {
  const services = [
    {
      image: service1,
      title: "Breakfast",
      linkText: "View Menu",
      slug: "breakfast-menu"
    },
    {
      image: service2,
      title: "Appetizers",
      linkText: "View Menu",
      slug: "appetizers-menu"
    },
    {
      image: service3,
      title: "Drinks",
      linkText: "View Menu",
      slug: "drinks-menu"
    }
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-labelledby="services-heading">
      <div className="container">
      <p className="section-subtitle label-2">A Culinary Journey</p>
<h2 id="services-heading" className="headline-1 section-title">Exquisite Flavors, Unmatched Elegance</h2>
<p className="section-text">
  At Nibbana, we craft unforgettable dining experiences with locally sourced ingredients<br />  
  and masterful techniques. Our menu blends traditional recipes with modern innovation,<br />  
  offering a symphony of flavors that delight the senses.  
</p>

        <div className="grid-list" role="list">
          {services.map((service) => (
            <div key={service.slug} className="service-item" role="listitem">
              <article className="service-card">
                <Link 
                  to={`/`} 
                  className="service-link has-before hover:shine"
                  aria-label={`View ${service.title} menu`}
                >
                  <figure className="card-banner img-holder" style={{ "--width": 285, "--height": 336 }}>
                    <img 
                      src={service.image} 
                      width="285" 
                      height="336" 
                      loading="lazy" 
                      alt="" 
                      className="img-cover"
                      aria-hidden="true"
                    />
                  </figure>
                </Link>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <Link to={`/`} className="service-title-link">
                      {service.title}
                    </Link>
                  </h3>
                  <Link 
                    to={`/`} 
                    className="btn-text hover-underline label-2"
                    aria-label={`View ${service.title} menu`}
                  >
                    {service.linkText}
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <img 
          src={shape1} 
          width="246" 
          height="412" 
          loading="lazy" 
          alt="" 
          className="shape shape-1 move-anim" 
          aria-hidden="true"
        />
        <img 
          src={shape2} 
          width="343" 
          height="345" 
          loading="lazy" 
          alt="" 
          className="shape shape-2 move-anim" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Service;