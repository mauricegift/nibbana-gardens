import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronUp } from 'ionicons/icons';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="back-top-btn active" 
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <IonIcon icon={chevronUp} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;