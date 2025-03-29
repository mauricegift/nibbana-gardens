import React from 'react';
import { IonIcon } from '@ionic/react';
import { locationOutline, timeOutline, callOutline, mailOutline } from 'ionicons/icons';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
      <address className="body-4">
              Nibbana Gardens, Eldoret City, <br />
              Shell, Eldoret-Nakuru Highway 
            </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <IonIcon icon={timeOutline} aria-hidden="true" />
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>

        <a href="tel:+254711111111" className="topbar-item link">
          <div className="icon">
            <IonIcon icon={callOutline} aria-hidden="true" />
          </div>
          <span className="span">+254711111111</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:booking@nibbanagardens.com" className="topbar-item link">
          <div className="icon">
            <IonIcon icon={mailOutline} aria-hidden="true" />
          </div>
          <span className="span">booking@nibbanagardens.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;