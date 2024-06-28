// import React, { useState } from 'react';
// import './NavBar.css';
// import { RiMenuLine, RiCloseLine, RiPlanetLine, RiArrowDownSLine, RiPieChartLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line } from 'react-icons/ri';

// const NavItem = ({ children, href, className = '' }) => (
//   <li>
//     <a href={href} className={`nav__link ${className}`}>{children}</a>
//   </li>
// );

// const DropdownMenu = ({ title, children, icon }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className={`dropdown__item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
//       <div className="nav__link">
//         {title} <RiArrowDownSLine className="dropdown__arrow" />
//       </div>
//       <ul className="dropdown__menu">
//         {children}
//       </ul>
//     </li>
//   );
// };

// const DropdownSubMenu = ({ title, children }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className={`dropdown__subitem ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
//       <div className="dropdown__link">
//         {title} <RiAddLine className="dropdown__add" />
//       </div>
//       <ul className="dropdown__submenu">
//         {children}
//       </ul>
//     </li>
//   );
// };

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <nav className="nav container">
//         <div className="nav__data">
//           <a href="#" className="nav__logo">
//             <RiPlanetLine /> Company
//           </a>
//           <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             <RiMenuLine className={`nav__burger ${menuOpen ? 'hide' : ''}`} />
//             <RiCloseLine className={`nav__close ${menuOpen ? 'show' : ''}`} />
//           </div>
//         </div>
//         <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
//           <ul className="nav__list">
//             <NavItem href="#">Home</NavItem>
//             <NavItem href="#">Company</NavItem>
//             <DropdownMenu title="Analytics">
//               <NavItem href="#"><RiPieChartLine /> Overview</NavItem>
//               <NavItem href="#"><RiArrowUpDownLine /> Transactions</NavItem>
//               <DropdownSubMenu title={<><RiBarChartLine /> Reports</>}>
//                 <NavItem href="#"><RiFileListLine /> Documents</NavItem>
//                 <NavItem href="#"><RiCashLine /> Payments</NavItem>
//                 <NavItem href="#"><RiRefund2Line /> Refunds</NavItem>
//               </DropdownSubMenu>
//             </DropdownMenu>
//             <NavItem href="#">Products</NavItem>
//             <DropdownMenu title="Users">
//               <NavItem href="#"><RiUserLine /> Profiles</NavItem>
//               <NavItem href="#"><RiLockLine /> Accounts</NavItem>
//               <NavItem href="#"><RiMessage3Line /> Messages</NavItem>
//             </DropdownMenu>
//             <NavItem href="#">Contact</NavItem>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import './NavBar.css';
import { 
  RiPlanetLine, RiMenuLine, RiCloseLine, RiArrowDownSLine, RiPieChartLine, RiArrowUpDownLine, 
  RiBarChartLine, RiAddLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, 
  RiMessage3Line 
} from 'react-icons/ri'; 

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
      <img src="https://via.placeholder.com/250x50" alt="Logo" className="logo" />
      <nav className="header__nav">
        <div className={`anchors ${menuOpen ? 'open' : ''}`}>
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
          <RiMenuLine className={`nav__burger ${menuOpen ? 'hide' : ''}`} />
          <RiCloseLine className={`nav__close ${menuOpen ? 'show' : ''}`} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
