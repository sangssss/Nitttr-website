import React from 'react';

import NavBar from './NavBar';
import './Header.css';
import Head from './Head';

const Header = () => {
  return (
    <>
    <Head />
    {/* <div classnmae='border-down'></div> */}
    <header className="header">
    
    
      
      <NavBar />
      {/* <Announce/> */}
    </header>
  
    </>
  );
};

export default Header;
