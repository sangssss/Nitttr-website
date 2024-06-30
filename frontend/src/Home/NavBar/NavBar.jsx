import React, { useState } from 'react';
import './NavBar.css';
import { RiMenuLine, RiCloseLine, RiHomeOfficeFill, RiCashLine, RiArrowUpDownLine, RiGitRepositoryPrivateFill, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line, RiArrowRightSLine, RiBuilding2Line, RiMessage2Fill, RiMessage3Fill, RiUserFollowFill, RiUserShared2Fill, RiBankFill, RiRulerFill, RiHomeOfficeLine, RiUser2Fill, RiUser3Fill, RiBuilding4Fill, RiBuilding3Line, RiStore2Fill, RiAccountCircleFill, RiBankCard2Fill, RiUser6Fill, RiGitRepositoryLine, RiFilePaper2Fill, RiBook2Fill, RiBuilding3Fill, RiUser5Fill, RiProgress1Line, RiProgress3Line, RiUser4Fill, RiBook3Line, RiBookMarkedFill } from 'react-icons/ri';

const Dropdown = ({ title, icon, children }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={`dropdown__item ${open ? 'active' : ''}`} onClick={toggleDropdown}>
      <div className="nav__link">
        {icon} {title}
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

  return (
    <li className="dropdown__subitem">
      <div className="dropdown__sublink" onClick={toggleSubmenu}>
        {icon} {title} <RiArrowRightSLine className={`dropdown__arrow ${open ? 'rotate' : ''}`} />
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
            <DropdownItem title="About Us" icon={<RiUserLine />} />
            <DropdownItem title="Vision & Mission" icon={<RiArrowUpDownLine />} />
            <DropdownItem title="Memorandum of Association" icon={<RiCashLine />} />
            <DropdownItem title="Governing Bodies" icon={<RiGitRepositoryPrivateFill />} />
            <DropdownItem title="Chairman Message" icon={<RiMessage2Fill />} />
            <DropdownItem title="Director Message" icon={<RiMessage3Fill />} />
            <DropdownItem title="Annual Reports" icon={<RiRefund2Line />} />
          </Dropdown>

          <Dropdown title="Administration" icon={<RiBuilding2Line />}>
            <DropdownItem title="Chairman" icon={<RiUserFollowFill />} />
            <DropdownItem title="Director" icon={<RiUser3Fill />} />
            <DropdownSubItem title="Committees & Incharge" icon={<RiGitRepositoryPrivateFill />}>
              <DropdownItem title="Office of Administration & Account" icon={<RiBankFill />} />
              <DropdownItem title="Chief Vigilance Officer" icon={<RiRulerFill />} />
              <DropdownItem title="Nodal Officer- Public Grievance" icon={<RiHomeOfficeLine/>} />
              <DropdownItem title="Estate Officer" icon={<RiUser2Fill />} />
            </DropdownSubItem>
            <DropdownItem title="Estate Office" icon={<RiBuilding4Fill/>} />
            <DropdownItem title="Guest House" icon={<RiBuilding3Line/>} />
            <DropdownItem title="Stores & Purchase" icon={<RiStore2Fill/>} />
            <DropdownSubItem title="Accounts Details" icon={<RiAccountCircleFill />}>
              <DropdownItem title="New PAN,TAN & GSTIN Details" icon={<RiBankCard2Fill/>} />
            </DropdownSubItem>
            <DropdownItem title="Staff of Admin & Accounts" icon={<RiUser6Fill />} />
            <DropdownSubItem title="Policies & Rules" icon={<RiRefund2Line />} >
              <DropdownItem title="Administration Rules" icon={<RiGitRepositoryLine/>} />
              <DropdownItem title="Account Rules" icon={<RiGitRepositoryPrivateFill/>} />
              <DropdownItem title="Administration Form" icon={<RiFilePaper2Fill/>} />
            </DropdownSubItem>
          </Dropdown>

          <Dropdown title="Academic & Research" icon={<RiBook2Fill />}>
            <DropdownItem title="Overview" icon={<RiUserFollowFill />} />
            <DropdownItem title="AICTE-EOAR Report" icon={<RiBuilding3Fill/>} />
            <DropdownSubItem title="Faculty & Department" icon={<RiUser5Fill/>}>
              {/* Add subitems if necessary */}
            </DropdownSubItem>
            <DropdownItem title="Professional Development Program" icon={<RiProgress1Line/>} />
            <DropdownItem title="International Training Program" icon={<RiProgress3Line/>} />
            <DropdownSubItem title="National Coordinators" icon={<RiUser4Fill/>}>
              <DropdownItem title="SWAYAM" icon={<RiBook3Line/>} />
              <DropdownItem title="NITTTR" icon={<RiBookMarkedFill/>} />
            </DropdownSubItem>
            <DropdownSubItem title="OER" icon={<RiRefund2Line />} >
              <DropdownItem title="LMS" icon={<RiGitRepositoryLine/>} />
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

        <div className="nav__toggle" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
