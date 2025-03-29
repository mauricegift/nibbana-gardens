import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector("[data-preaload]");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
      }, 1000);
    }
  }, []);

  return (
    <div className="preload" data-preaload>
      <div className="circle"></div>
      <p className="text">Nibbana</p>
    </div>
  );
};

export default Preloader;