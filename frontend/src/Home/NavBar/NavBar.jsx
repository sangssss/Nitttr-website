
import React, { useState } from 'react';
import './NavBar.css';
import { RiPlanetLine, RiMenuLine, RiCloseLine, RiArrowDownSLine, RiPieChartLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ analytics: false, reports: false, users: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <header className="header">
        <img src='/images/chennaiLogo.png' style={{width:"400px",height:"80px"}}></img>
      <nav className="header__nav">
        <div className="anchors">
          <a href="#">Home</a>
          <a href="#">Company</a>

          <div className="dropdown__item" onClick={() => toggleDropdown('analytics')}>
            <div className="nav__link">
              Analytics <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.analytics ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.analytics ? 'show' : ''}`}>
              <li><a href="#" className="dropdown__link"><RiPieChartLine /> Overview</a></li>
              <li><a href="#" className="dropdown__link"><RiArrowUpDownLine /> Transactions</a></li>
              <li className="dropdown__subitem" onClick={() => toggleDropdown('reports')}>
                <div className="dropdown__link">
                  <RiBarChartLine /> Reports <RiAddLine className={`dropdown__add ${dropdownOpen.reports ? 'rotate' : ''}`} />
                </div>
                <ul className={`dropdown__submenu ${dropdownOpen.reports ? 'show' : ''}`}>
                  <li><a href="#" className="dropdown__sublink"><RiFileListLine /> Documents</a></li>
                  <li><a href="#" className="dropdown__sublink"><RiCashLine /> Payments</a></li>
                  <li><a href="#" className="dropdown__sublink"><RiRefund2Line /> Refunds</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="#">Products</a>
          <div className="dropdown__item" onClick={() => toggleDropdown('users')}>
            <div className="nav__link">
              Users <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.users ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.users ? 'show' : ''}`}>
              <li><a href="#" className="dropdown__link"><RiUserLine /> Profiles</a></li>
              <li><a href="#" className="dropdown__link"><RiLockLine /> Accounts</a></li>
              <li><a href="#" className="dropdown__link"><RiMessage3Line /> Messages</a></li>
            </ul>
          </div>
          <a href="#">Contact</a>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <RiMenuLine className={`nav__burger ${menuOpen ? 'show-icon' : ''}`} />
          <RiCloseLine className={`nav__close ${menuOpen ? 'show-icon' : ''}`} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
