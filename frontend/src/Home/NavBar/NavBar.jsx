import React, { useState } from 'react';
import './NavBar.css';
import { RiMenuLine, RiCloseLine, RiHomeOfficeFill, RiCashLine, RiArrowUpDownLine, RiGitRepositoryPrivateFill, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line, RiArrowRightSLine, RiHomeOfficeLine, RiChatFollowUpFill, RiUserShared2Fill, RiAddLine, RiUser2Fill, RiUser3Fill, RiUser4Fill, RiHome4Line, RiStore3Fill, RiAccountBoxFill, RiBankCard2Fill, RiRulerFill, RiBankFill, RiInformationFill, RiSchoolFill, RiBook3Fill, RiGitRepositoryPrivateLine, RiBuilding4Fill, RiProgress2Fill, RiBook2Line, RiBookMarkedLine } from 'react-icons/ri';

const Dropdown = ({ title, icon, children }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Close dropdown when mouse leaves the dropdown area
  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <div className={`dropdown__item ${open ? 'active' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
      <div className="nav__link">
        {icon} {title}
        <RiArrowRightSLine className={`dropdown__arrow ${open ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__menu ${open ? 'active' : ''}`}>
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
  const [open, setOpen] = useState(false);

  const toggleSubmenu = () => {
    setOpen(!open);
  };

  // Close submenu when mouse leaves the submenu area
  const closeSubmenu = () => {
    setOpen(false);
  };

  return (
    <li className="dropdown__subitem" onMouseEnter={toggleSubmenu} onMouseLeave={closeSubmenu}>
      <div className="dropdown__sublink">
        {icon} {title}
        <RiArrowRightSLine className={`dropdown__arrow ${open ? 'rotate' : ''}`} />
      </div>
      <ul className={`dropdown__submenu ${open ? 'show' : ''}`}>
        {children}
      </ul>
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src='/images/chennaiLogo.png' style={{ width: "400px", height: "80px" }} alt="Chennai Logo" />
      <nav className="header__nav">
        <div className={`anchors ${menuOpen ? 'show-menu' : ''}`}>
          <a href="#">Home</a>

          <Dropdown title="Institution" icon={<RiHomeOfficeFill />}>
            <DropdownItem title="About Us" icon={<RiCashLine />} />
            <DropdownItem title="Vision & Mission" icon={<RiArrowUpDownLine />} />
            <DropdownItem title="Memorandum of Association" icon={<RiCashLine />} />
            <DropdownItem title="Governing Bodies" icon={<RiGitRepositoryPrivateFill />} />
            <DropdownItem title="Chairman Message" icon={<RiCashLine />} />
            <DropdownItem title="Director Message" icon={<RiRefund2Line />} />
            <DropdownItem title="Annual Reports" icon={<RiRefund2Line />} />
          </Dropdown>

          <Dropdown title="Administration" icon={<RiHomeOfficeLine />}>
            <DropdownItem title="Chairman" icon={<RiChatFollowUpFill />} />
            <DropdownItem title="Director" icon={<RiUserShared2Fill />} />
            <DropdownSubItem title="Committees & Incharge" icon={<RiAddLine/>}>
              <DropdownItem title="Office of Administration & Account" icon={<RiCashLine />} />
              <DropdownItem title="Chief Vigilance Officer" icon={<RiUser2Fill />} />
              <DropdownItem title="Nodal Officer- Public Grievance" icon={<RiUser3Fill/>} />
              <DropdownItem title="Estate Officer" icon={<RiUser4Fill/>} />
            </DropdownSubItem>
            <DropdownItem title="Estate Office" icon={<RiHomeOfficeLine />} />
            <DropdownItem title="Guest House" icon={<RiHome4Line />} />
            <DropdownItem title="Stores & Purchase" icon={<RiStore3Fill/>} />
            <DropdownSubItem title="Accounts Details" icon={<RiAccountBoxFill />}>
              <DropdownItem title="New PAN,TAN & GSTIN Details" icon={<RiBankCard2Fill />} />
            </DropdownSubItem>
            <DropdownItem title="Staff of Admin & Accounts" icon={<RiUser />} />
            <DropdownSubItem title="Policies & Rules" icon={<RiGitRepositoryPrivateFill/>} >
              <DropdownItem title="Administration Rules" icon={<RiRulerFill />} />
              <DropdownItem title="Account Rules" icon={<RiBankFill />} />
              <DropdownItem title="Administration Form" icon={<RiInformationFill />} />
            </DropdownSubItem>

          </Dropdown>
          
          <Dropdown title="Academic & Research" icon={<RiBook3Fill />}>
            <DropdownItem title="AICTE-EOAR Report" icon={<RiGitRepositoryPrivateLine />} />
            <DropdownSubItem title="Faculty & Department" icon={<RiBuilding4Fill />}>
            </DropdownSubItem>
            <DropdownItem title="Professional Development Program" icon={<RiProgress2Fill />} />
            <DropdownItem title="International Training Program" icon={<RiCashLine />} />
            <DropdownSubItem title="National Coordinators" icon={<RiUser4Fill/>}>
              <DropdownItem title="Swayam" icon={<RiBook2Line/>} />
              <DropdownItem title="NITTTR" icon={<RiBookMarkedLine/>} />
            </DropdownSubItem>
            <DropdownSubItem title="OER" icon={<RiRefund2Line />} >
              <DropdownItem title="LMS" icon={<Riwebs/>} />
            </DropdownSubItem>
          </Dropdown>
          <a href="#">Products</a>

          <Dropdown title="Users" icon={<RiUserLine />}>
            <DropdownItem title="Profiles" icon={<RiUserLine />} />
            <DropdownItem title="Accounts" icon={<RiLockLine />} />
            <DropdownItem title="Messages" icon={<RiMessage3Line />} />
          </Dropdown>

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
