// import React, { useState } from 'react';
// import './NavBar.css';
// import { RiMenuLine, RiCloseLine, RiArrowDownSLine, RiPieChartLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line, RiHome7Fill, RiGitRepositoryPrivateFill, RiBookFill, RiMoneyDollarBoxFill, RiMailAddFill, RiUserShared2Line, RiUserFollowFill, RiUserSmileFill, RiUserReceived2Fill, RiUserShared2Fill, RiUserFill, RiSchoolFill, RiChatPrivateFill, RiProjector2Fill, RiHomeOfficeFill, RiBookMarkedFill, RiBookOpenFill } from 'react-icons/ri';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState({
//     institute: false,
//     administration: false,
//     academics: false,
//     centers: false,
//     connect: false
//   });

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = (name) => {
//     setDropdownOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
//   };

//   return (
//     <header className="header">
//       <img src='/images/chennaiLogo.png' style={{ width: "400px", height: "80px" }}></img>
//       <nav className="header__nav">
//         <div className="anchors">
          

//           <div className={`dropdown__item ${dropdownOpen.institute ? 'active' : ''}`} onClick={() => toggleDropdown('institute')}>
//             <div className="nav__link">
//               Institute <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.institute ? 'rotate' : ''}`} />
//             </div>
//             <ul className={`dropdown__menu ${dropdownOpen.institute ? 'show' : ''}`}>
//               <li><a href="#"><RiHome7Fill /> Homepage</a></li>
//               <li><a href="#"><RiCashLine /> About Us</a></li>
//               <li><a href="#"><RiGitRepositoryPrivateFill /> Board of Governs</a></li>
//               <li><a href="#"><RiBookFill /> Academic Council</a></li>
//               <li><a href="#"><RiCashLine /> Memorandum of Association</a></li>
//               <li><a href="#"><RiMoneyDollarBoxFill /> Annual Reports</a></li>
//               <li><a href="#"><RiMailAddFill /> News Letter</a></li>
//             </ul>
//           </div>

//           <div className={`dropdown__item ${dropdownOpen.administration ? 'active' : ''}`} onClick={() => toggleDropdown('administration')}>
//             <div className="nav__link">
//               Administration <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.administration ? 'rotate' : ''}`} />
//             </div>
//             <ul className={`dropdown__menu ${dropdownOpen.administration ? 'show' : ''}`}>
//               <li><a href="#"><RiUserShared2Fill /> Director</a></li>
//               <li><a href="#"><RiUserFollowFill /> Chairman</a></li>
//               <li><a href="#"><RiUserSmileFill /> Deans</a></li>
//               <li><a href="#"><RiUserReceived2Fill/> Department Heads</a></li>
//               <li><a href="#"><RiAddLine /> Committees & Incharges</a></li>
//               <li><a href="#"><RiFileListLine /> Past Directors & Chairpersons</a></li>
//               <li><a href="#"><RiCashLine /> Administration Dept.</a></li>
//               <li><a href="#"><RiRefund2Line /> Annual Project Report</a></li>
//             </ul>
//           </div>

//           <div className={`dropdown__item ${dropdownOpen.academics ? 'active' : ''}`} onClick={() => toggleDropdown('academics')}>
//             <div className="nav__link">
//               Academics <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.academics ? 'rotate' : ''}`} />
//             </div>
//             <ul className={`dropdown__menu ${dropdownOpen.academics ? 'show' : ''}`}>
//               <li><a href="#"><RiPieChartLine /> Overview</a></li>
//               <li><a href="#"><RiArrowUpDownLine /> Study @ NITTTR</a></li>
//               <li><a href="#"><RiUserFill /> Faculty & Departments</a></li>
//               <li><a href="#"><RiSchoolFill /> Learning for All</a></li>
//               <li><a href="#"><RiChatPrivateFill /> Professional Development Program</a></li>
//               <li><a href="#"><RiFileListLine /> International Training Program</a></li>
//               <li><a href="#"><RiMessage3Line /> SWAYAM NITTT Modules</a></li>
//             </ul>
//           </div>

//           <div className={`dropdown__item ${dropdownOpen.centers ? 'active' : ''}`} onClick={() => toggleDropdown('centers')}>
//             <div className="nav__link">
//               Centers & Facilities <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.centers ? 'rotate' : ''}`} />
//             </div>
//             <ul className={`dropdown__menu ${dropdownOpen.centers ? 'show' : ''}`}>
//               <li><a href="#"><RiBookOpenFill /> Academics, Studies & Research</a></li>
//               <li><a href="#"><RiArrowUpDownLine /> International Affairs</a></li>
//               <li><a href="#"><RiHomeOfficeFill /> Resource Centre</a></li>
//             </ul>
//           </div>

//           <div className={`dropdown__item ${dropdownOpen.connect ? 'active' : ''}`} onClick={() => toggleDropdown('connect')}>
//             <div className="nav__link">
//               Connect <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.connect ? 'rotate' : ''}`} />
//             </div>
//             <ul className={`dropdown__menu ${dropdownOpen.connect ? 'show' : ''}`}>
//               <li><a href="#"><RiUserFill/> Alumni</a></li>
//               <li><a href="#"><RiUserLine /> Students</a></li>
//               <li><a href="#"><RiProjector2Fill /> Projects & Awards</a></li>
//             </ul>
//           </div>

//           <a href="#">Contact Us</a>

//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <RiMenuLine className={`nav__burger ${menuOpen ? 'show-icon' : ''}`} />
//           <RiCloseLine className={`nav__close ${menuOpen ? 'show-icon' : ''}`} />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './NavBar.css';
import { Dropdown, DropdownItem, DropdownSubItem } from './Dropdown';
import { RiMenuLine, RiCloseLine, RiPieChartLine, RiArrowUpDownLine, RiBarChartLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src='/images/chennaiLogo.png' style={{ width: "400px", height: "80px" }} alt="Chennai Logo" />
      <nav className="header__nav">
        <div className="anchors">
          <a href="#">Home</a>
          <a href="#">Company</a>

          <Dropdown title="Analytics" icon={<RiPieChartLine />}>
            <DropdownItem title="Overview" icon={<RiPieChartLine />} />
            <DropdownItem title="Transactions" icon={<RiArrowUpDownLine />} />
            <DropdownSubItem title="Reports" icon={<RiBarChartLine />}>
              <DropdownItem title="Documents" icon={<RiFileListLine />} />
              <DropdownItem title="Payments" icon={<RiCashLine />} />
              <DropdownItem title="Refunds" icon={<RiRefund2Line />} />
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