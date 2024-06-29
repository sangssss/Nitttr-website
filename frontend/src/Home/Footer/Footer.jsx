import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <div className="row">
          <div className="footer-col">
            <h2>Contact Us</h2>
            <ul>
              <li><p>For any queries</p></li>
              <li><p>9841514138 / 9944395452</p></li>
              <li><p>Mail: engss2024@it.ssn.edu.in</p></li>
            </ul>
          </div>
          
          <div className="footerhead">
            <h1>Sri Sivasubramaniya Nadar College of Engineering</h1>
            <h3>Rajiv Gandhi Salai, OMR, Kalavakam</h3>
            <h3>Pin: 603110</h3>
            <h3>+91 44 2441 1656 / 2441 6474</h3>
          </div>
          
          <div className="footer-col">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footerbtm">
          <h4>&copy; 2024 Sri Sivasubramaniya Nadar College of Engineering. All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
