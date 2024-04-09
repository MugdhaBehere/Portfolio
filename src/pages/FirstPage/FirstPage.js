import React from 'react';
import Mugdha from '../../images/Mugdha.jpeg';
import Logo from '../../images/logo.mp4';
import '../FirstPage/FirstPage.css';
const FirstPage = () => {
  return (
    <div className="container">
      <div className="border-container">
        <div className="photo-container">
          <img className="photo" src={Mugdha} alt="MugdhaBehere" />
        </div>
        <div className="border-animation"></div>
      </div>


    </div>
  );
};

export default FirstPage;
