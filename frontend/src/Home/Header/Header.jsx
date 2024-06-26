import React from 'react'
import './Header.css';
import Button from '../Button';

// import { a } from 'react-scroll';
function Header() {
  return (
    <div>
        
    <script src="https://kit.fontawesome.com/8862169197.js" crossorigin="anonymous"></script>
        <header class='header'>
    

        <img src='/images/chennaiLogo.png' style={{width:"400px",height:"80px"}}></img>
        <nav class='header__nav'>
        <div className='anchors'>
           
            <a to="FDP" >Institute</a>
            <a to="About" >Administration</a>
            <a to="speakers">Academics</a>
            <a to="CoOrdinators" >Centres & Facilities</a>
            <a> People</a>
            <a to="Registration" >Connect</a>
            <a to="footer" >Contact Us</a>
            
        </div>
        

        
                   
        </nav>
    </header>

    </div>
  )
}

export default Header;
