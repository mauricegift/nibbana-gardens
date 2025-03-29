import React from 'react';
import { Link } from 'react-router-dom';
import event1 from '../assets/images/event-1.jpg';
import event2 from '../assets/images/event-2.jpg';
import event3 from '../assets/images/event-3.jpg';

const Event = () => {
  const events = [
    {
      image: event1,
      date: "2025-04-05",
      subtitle: "Food, Flavour",
      title: "Flavour so good you'll try to eat with your eyes.",
      slug: "flavour-so-good"
    },
    {
      image: event2,
      date: "2025-06-18",
      subtitle: "Healthy Food",
      title: "Flavour so good you'll try to eat with your eyes.",
      slug: "healthy-food-event"
    },
    {
      image: event3,
      date: "2025-07-22",
      subtitle: "Recipe",
      title: "Flavour so good you'll try to eat with your eyes.",
      slug: "recipe-showcase"
    }
  ];

  return (
    <section className="section event bg-black-10" aria-label="upcoming events">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>
        <h2 className="section-title headline-1 text-center">Upcoming Events</h2>

        <ul className="grid-list">
          {events.map((event, index) => (
            <li key={index}>
              <article className="event-card has-before hover:shine">
                <Link to={`/`} className="card-link">
                  <div className="card-banner img-holder" style={{ "--width": 350, "--height": 450 }}>
                    <img 
                      src={event.image} 
                      width="350" 
                      height="450" 
                      loading="lazy" 
                      alt="" 
                      className="img-cover"
                      aria-hidden="true"
                    />
                    <time className="publish-date label-2" dateTime={event.date}>
                      {new Date(event.date).toLocaleDateString('en-GB')}
                    </time>
                  </div>
                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">{event.subtitle}</p>
                    <h3 className="card-title title-2 text-center">{event.title}</h3>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <Link to="/" className="btn btn-primary">
          <span className="text text-1">View Our Blog</span>
          <span className="text text-2" aria-hidden="true">View Our Blog</span>
        </Link>
      </div>
    </section>
  );
};

export default Event;