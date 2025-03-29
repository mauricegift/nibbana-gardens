import React from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../assets/images/menu-1.png';
import menu2 from '../assets/images/menu-2.png';
import menu3 from '../assets/images/menu-3.png';
import menu4 from '../assets/images/menu-4.png';
import menu5 from '../assets/images/menu-5.png';
import menu6 from '../assets/images/menu-6.png';
import shape5 from '../assets/images/shape-5.png';
import shape6 from '../assets/images/shape-6.png';

const Menu = () => {
  const menuItems = [
    {
      image: menu1,
      title: "Greek Salad",
      badge: "Seasonal",
      price: "Ksh 3200.00",
      description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
      slug: "greek-salad"
    },
    {
      image: menu2,
      title: "Lasagne",
      price: "Ksh 5120.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      slug: "lasagne"
    },
    {
      image: menu3,
      title: "Butternut Pumpkin",
      price: "Ksh 1280.00",
      description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
      slug: "butternut-pumpkin"
    },
    {
      image: menu4,
      title: "Tokusen Wagyu",
      badge: "New",
      price: "Ksh 4992.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      slug: "tokusen-wagyu"
    },
    {
      image: menu5,
      title: "Olivas Rellenas",
      price: "Ksh 3200.00",
      description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
      slug: "olivas-rellenas"
    },
    {
      image: menu6,
      title: "Opu Fish",
      price: "Ksh 4994.00",
      description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      slug: "opu-fish"
    }
  ];

  return (
    <section className="section menu" aria-labelledby="menu-heading" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 id="menu-heading" className="headline-1 section-title text-center">Delicious Menu</h2>

        <div className="grid-list" role="list">
          {menuItems.map((item) => (
            <div key={item.slug} className="menu-item" role="listitem">
              <article className="menu-card hover:card">
                <Link to={`/`} className="menu-card-link">
                  <figure className="card-banner img-holder" style={{ "--width": 100, "--height": 100 }}>
                    <img 
                      src={item.image} 
                      width="100" 
                      height="100" 
                      loading="lazy" 
                      alt="" 
                      className="img-cover"
                      aria-hidden="true"
                    />
                  </figure>

                  <div className="menu-card-content">
                    <div className="title-wrapper">
                      <h3 className="title-3">
                        <span className="card-title">{item.title}</span>
                      </h3>
                      {item.badge && (
                        <span className="badge label-1" aria-label={item.badge}>
                          {item.badge}
                        </span>
                      )}
                      <span className="span title-2">{item.price}</span>
                    </div>
                    <p className="card-text label-1">{item.description}</p>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>

        <p className="menu-text text-center">
          Daily from <time className="span">19:00</time> to <time className="span">22:00</time>
        </p>

        <Link to="/" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>

        <img 
          src={shape5} 
          width="921" 
          height="1036" 
          loading="lazy" 
          alt="" 
          className="shape shape-2 move-anim" 
          aria-hidden="true"
        />
        <img 
          src={shape6} 
          width="343" 
          height="345" 
          loading="lazy" 
          alt="" 
          className="shape shape-3 move-anim" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Menu;