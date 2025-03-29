import React from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline } from 'ionicons/icons';
import logo from '../assets/images/logo.svg';
import footerBg from '../assets/images/footer-bg.jpg';

const Footer = () => {
  const footerLinks1 = [
    { text: "Home", href: "#" },
    { text: "Menus", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Our Chefs", href: "#" },
    { text: "Contact", href: "#" }
  ];

  const footerLinks2 = [
    { text: "Facebook", href: "https://facebook.com/ngire.mourice.1" },
    { text: "Instagram", href: "https://instagram.com/giftedtechnexus" },
    { text: "Twitter", href: "https://x.com/GiftedMauriceKe" },
    { text: "Youtube", href: "https://youtube.com/@giftedtechnexus" },
    { text: "Whatsapp", href: "https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y" }
  ];

  return (
    <footer 
      className="footer section has-bg-image text-center" 
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="/" className="logo">
              <img src={logo} width="160" height="50" loading="lazy" alt="Nibbana Gardens" />
            </a>
            <address className="body-4">
              Nibbana Gardens, Eldoret City, <br />
              Shell, Eldoret-Nakuru Highway 
            </address>
            <a href="mailto:booking@nibbanagardens.com" className="body-4 contact-link">booking@nibbanagardens.com</a>
            <a href="tel:+254711111111" className="body-4 contact-link">Booking Request : +254711111111</a>
            <p className="body-4">Open : 09:00 am - 05:30 pm</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Get News & Offers</p>
            <p className="label-1">Subscribe us & Get <span className="span">25% Off.</span></p>

            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <IonIcon icon={mailOutline} aria-hidden="true" />
                <input type="email" name="email_address" placeholder="Your Email" autoComplete="off" className="input-field" />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            {footerLinks1.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="label-2 footer-link hover-underline">{link.text}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            {footerLinks2.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="label-2 footer-link hover-underline">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
        <p className="copyright">
  &copy; 2025 Nibbana Gardens. <br /> Designed with 💜 by{" "}
  <a href="https://www.giftedtech.web.id" target="_blank" rel="noopener noreferrer" className="link">
    Gifted Tech
  </a>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;