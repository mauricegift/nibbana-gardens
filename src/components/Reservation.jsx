import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, calendarClearOutline, timeOutline } from 'ionicons/icons';
import formPattern from '../assets/images/form-pattern.png';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    persons: '1-person',
    date: '',
    time: '08:00am',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="reservation" aria-labelledby="reservation-heading">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form 
            onSubmit={handleSubmit}
            className="form-left"
            aria-labelledby="reservation-heading"
          >
            <h2 id="reservation-heading" className="headline-1 text-center">
              Online Reservation
            </h2>
            
            <p className="form-text text-center">
              Booking request{' '}
              <a href="tel:+254711111111" className="link" aria-label="Call us on +254711111111">
              +254711111111
              </a>{' '}
              or fill out below order form
            </p>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="input-field"
                required
                aria-required="true"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="input-field"
                required
                aria-required="true"
              />
            </div>

            <div className="input-wrapper">
              <div className="icon-wrapper" aria-label="Number of persons">
                <IonIcon icon={personOutline} aria-hidden="true" />
                <select
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                  className="input-field"
                  aria-label="Select number of persons"
                >
                  <option value="1-person">1 Person</option>
                  <option value="2-person">2 Persons</option>
                  <option value="3-person">3 Persons</option>
                  <option value="4-person">4 Persons</option>
                  <option value="5-person">5 Persons</option>
                  <option value="6-person">6 Persons</option>
                  <option value="7-person">8 Persons</option>
                  <option value="7-person">9 Persons</option>
                  <option value="7-person">10 Persons</option>
                  <option value="7-person">11 Persons</option>
                  <option value="7-person">12 Persons</option>
                  <option value="7-person">13 Persons</option>
                  <option value="7-person">14 Persons</option>
                  <option value="7-person">15 Persons</option>
                  <option value="7-person">16 Persons</option>
                  <option value="7-person">17 Persons</option>
                  <option value="7-person">18 Persons</option>
                  <option value="7-person">19 Persons</option>
                  <option value="7-person">20 Persons</option>
                </select>
                <IonIcon icon={personOutline} aria-hidden="true" />
              </div>

              <div className="icon-wrapper" aria-label="Reservation date">
                <IonIcon icon={calendarClearOutline} aria-hidden="true" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input-field"
                  required
                  aria-required="true"
                  aria-label="Select reservation date"
                />
                <IonIcon icon={calendarClearOutline} aria-hidden="true" />
              </div>

              <div className="icon-wrapper" aria-label="Reservation time">
                <IonIcon icon={timeOutline} aria-hidden="true" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="input-field"
                  aria-label="Select reservation time"
                >
                  <option value="08:00am">08:00 am</option>
                  <option value="09:00am">09:00 am</option>
                  <option value="10:00am">10:00 am</option>
                  <option value="11:00am">11:00 am</option>
                  <option value="12:00pm">12:00 pm</option>
                  <option value="01:00pm">01:00 pm</option>
                  <option value="02:00pm">02:00 pm</option>
                  <option value="03:00pm">03:00 pm</option>
                  <option value="04:00pm">04:00 pm</option>
                  <option value="05:00pm">05:00 pm</option>
                  <option value="06:00pm">06:00 pm</option>
                  <option value="07:00pm">07:00 pm</option>
                  <option value="08:00pm">08:00 pm</option>
                  <option value="09:00pm">09:00 pm</option>
                  <option value="10:00pm">10:00 pm</option>
                </select>
                <IonIcon icon={timeOutline} aria-hidden="true" />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              className="input-field"
              aria-label="Additional message"
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Book A Table</span>
              <span className="text text-2" aria-hidden="true">Book A Table</span>
            </button>
          </form>

          <div 
            className="form-right text-center" 
            style={{ backgroundImage: `url(${formPattern})` }}
            aria-label="Contact information"
          >
            <h2 className="headline-1 text-center">Contact Us</h2>
            <p className="contact-label">Booking Request</p>
            <a 
              href="tel:+254711111111" 
              className="body-1 contact-number hover-underline"
              aria-label="Call us on +254711111111"
            >
              +254711111111
            </a>
            <div className="separator"></div>
            <p className="contact-label">Location</p>
            <address className="body-4">
              Nibbana Gardens, Eldoret City, <br />
              Shell, Eldoret-Nakuru Highway 
            </address>
            <p className="contact-label">Lunch Time</p>
            <p className="body-4">
              Monday to Sunday <br />
              <time dateTime="11:00">12.00 pm</time> - <time dateTime="14:30">3.00 pm</time>
            </p>
            <p className="contact-label">Dinner Time</p>
            <p className="body-4">
              Monday to Sunday <br />
              <time dateTime="17:00">06.00 pm</time> - <time dateTime="22:00">10.00 pm</time>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;