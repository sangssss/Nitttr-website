<<<<<<< HEAD
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
         {title}<RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__menu ${dropdownOpen ? 'show' : ''}`}>
        {children}
=======
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Dropdown = ({ title, isOpen, toggleDropdown, items }) => {
  return (
    <div className="dropdown__item" onClick={toggleDropdown}>
      <div className="nav__link">
        {title} <RiArrowDownSLine className={`dropdown__arrow ${isOpen ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__menu ${isOpen ? 'show' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="dropdown__link">
              {item.icon} {item.label}
            </a>
            {item.subItems && (
              <ul className={`dropdown__submenu ${isOpen ? 'show' : ''}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="dropdown__sublink">
                      {subItem.icon} {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
>>>>>>> 95f2947c3fa0ef79a6f9c8284e4ff431539646aa
      </ul>
    </div>
  );
};

<<<<<<< HEAD
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
=======
export default Dropdown;
>>>>>>> 95f2947c3fa0ef79a6f9c8284e4ff431539646aa
