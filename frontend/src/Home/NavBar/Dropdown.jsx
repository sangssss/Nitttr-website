import React, { useState } from 'react';
import { RiArrowDownSLine, RiAddLine } from 'react-icons/ri';
// import './Dropdown.css';

const Dropdown = ({ title, icon, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdown__item">
      <div className="nav__link" onClick={toggleDropdown}>
        {icon} {title} <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__menu ${dropdownOpen ? 'show' : ''}`}>
        {children}
      </ul>
    </div>
  );
};

const DropdownItem = ({ title, icon }) => (
  <li>
    <a href="#" className="dropdown__link">
      {icon} {title}
    </a>
  </li>
);

const DropdownSubItem = ({ title, icon, children }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <li className="dropdown__subitem">
      <div className="dropdown__link" onClick={toggleSubmenu}>
        {icon} {title} <RiAddLine className={`dropdown__add ${submenuOpen ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__submenu ${submenuOpen ? 'show' : ''}`}>
        {children}
      </ul>
    </li>
  );
};

export { Dropdown, DropdownItem, DropdownSubItem };
