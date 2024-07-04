import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';
import './Head.css';

const Head = () => {
  return (
    <header className="header">
    
      <img src='/images/chennaiLogo.png' alt="Chennai Logo" className="header-logo" />
      {/* </div> */}
      {/* <div className='hRight' > */}
      <img src='/images/G20_India_2023_logo.png' alt="G20 Logo" className="center-logo" />
      <div className="social-icons">
        <RiTwitterFill className="social-icon" />
        <RiFacebookFill className="social-icon" />
        <RiInstagramFill className="social-icon" />
        <RiLinkedinFill className="social-icon" />
      </div>
      {/* </div> */}
    </header>
  );
};

export default Head;
