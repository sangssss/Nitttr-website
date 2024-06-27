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
      </ul>
    </div>
  );
};

export default Dropdown;
