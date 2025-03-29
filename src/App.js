import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/Preloader';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import SpecialDish from './components/SpecialDish';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Features from './components/Features';
import Event from './components/Event';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <div id="top">
        <Preloader />
        <TopBar />
        <Header />
        
        <main>
          <article>
            <Hero />
            <Service />
            <About />
            <SpecialDish />
            <Menu />
            <Testimonials />
            <Reservation />
            <Features />
            <Event />
          </article>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;