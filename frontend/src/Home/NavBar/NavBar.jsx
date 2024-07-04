<<<<<<< HEAD
// import React, { useState, useRef, useEffect } from 'react';
// import './NavBar.css';
// import {
//   RiMenuLine, RiCloseLine, RiHomeOfficeFill, RiCashLine, RiArrowUpDownLine,
//   RiGitRepositoryPrivateFill, RiRefund2Line, RiUserLine, RiLockLine,
//   RiMessage3Line, RiArrowRightSLine, RiBuilding2Line, RiMessage2Fill,
//   RiMessage3Fill, RiUserFollowFill, RiUserShared2Fill, RiBankFill,
//   RiRulerFill, RiHomeOfficeLine, RiUser2Fill, RiUser3Fill, RiBuilding4Fill,
//   RiBuilding3Line, RiStore2Fill, RiAccountCircleFill, RiBankCard2Fill,
//   RiUser6Fill, RiGitRepositoryLine, RiFilePaper2Fill, RiBook2Fill,
//   RiBuilding3Fill, RiUser5Fill, RiProgress1Line, RiProgress3Line,
//   RiUser4Fill, RiBook3Line, RiBookMarkedFill,
//   RiBookOpenFill,
//   RiBookReadLine,
//   RiBook3Fill,
//   RiNewspaperLine,
//   RiMastercardFill,
//   RiCodeBlock,
//   RiBuildingFill,
//   RiOutlet2Fill,
//   RiLogoutCircleFill,
//   RiBuilding4Line,
//   RiBuilding2Fill,
//   RiSearch2Fill,
//   RiSearch2Line,
//   RiSearchEyeFill,
//   RiFileSearchFill,
//   RiPlaneFill,
//   RiUser2Line,
//   RiUser4Line,
//   RiUser5Line,
//   RiUser3Line,
//   RiUserFill,
//   RiShapesLine,
//   RiNotificationLine,
//   RiNotification4Fill,
//   RiBookmarkFill,
//   RiChatPrivateFill,
//   RiMoneyCnyCircleFill,
//   RiChatPrivateLine,
//   RiHome2Fill,
//   RiShakeHandsFill,
//   RiHome3Fill,
//   RiAccountBoxFill,
//   RiLogoutBoxFill,
//   RiNewsFill,
//   RiBookOpenLine,
//   RiWebcamFill,
//   RiBootstrapFill,
//   RiBookMarkedLine,
//   RiSearchEyeLine,
//   RiNewsLine,
//   RiNotificationBadgeLine,
//   RiNotificationOffFill,
//   RiStickyNoteAddFill,
//   RiGameFill,
//   RiGamepadLine,
//   RiComputerFill,
//   RiWifiFill,
//   RiPulseFill,
//   RiAddFill,
//   RiProjector2Fill,
//   RiSpeaker2Fill,
//   RiStickyNote2Fill2,
//   RiFilePaper2Line,
//   RiSpeakerFill,
//   RiMickeyFill,
//   RiSpeaker3Fill,
//   RiTwitterFill,
//   RiFacebookFill,
//   RiInstagramFill,
//   RiLinkedinFill
// } from 'react-icons/ri';

// const useOutsideClick = (ref, callback) => {
//   useEffect(() => {
//     const handleClick = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     document.addEventListener('mousedown', handleClick);
//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     };
//   }, [ref, callback]);
// };

// const adjustDropdownPosition = (menu) => {
//   const rect = menu.getBoundingClientRect();
//   if (rect.bottom > window.innerHeight) {
//     menu.classList.add('adjust-position');
//   } else {
//     menu.classList.remove('adjust-position');
//   }
// };

// const Dropdown = ({ title, icon, children, className }) => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     if (open) {
//       adjustDropdownPosition(menuRef.current);
//     }
//   }, [open]);

//   useOutsideClick(menuRef, () => setOpen(false));

//   return (
//     <div className={`dropdown__item ${open ? 'active' : ''} ${className}`} onClick={toggleDropdown}>
//       <div className="nav__link">
//         {icon} {title}
//       </div>
//       <ul ref={menuRef} className={`dropdown__menu ${open ? 'active' : ''}`}>
//         {children}
//       </ul>
//     </div>
//   );
// };

// const DropdownItem = ({ title, icon }) => (
//   <li>
//     <a href="#" className="dropdown__link">
//       {icon} {title}
//     </a>
//     <hr className="dropdown__divider" />
//   </li>
// );

// const DropdownSubItem = ({ title, icon, children }) => {
//   const [open, setOpen] = useState(false);
//   const submenuRef = useRef(null);

//   const toggleSubmenu = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     if (open) {
//       adjustDropdownPosition(submenuRef.current);
//     }
//   }, [open]);

//   useOutsideClick(submenuRef, () => setOpen(false));
  

//   return (
//     <li className="dropdown__subitem">
//       <div className="dropdown__sublink" onClick={toggleSubmenu}>
//         {icon} {title} <RiArrowRightSLine className={`dropdown__arrow ${open ? 'rotate' : ''}`} />
//       </div>
//       <hr className={`dropdown__divider ${open ? 'show' : ''}`} />
//       <ul ref={submenuRef} className={`dropdown__submenu ${open ? 'active' : ''}`}>
//         {children}
//       </ul>
//     </li>
//   );
// };

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };


//   return (
//     <header className="header">
//       <img src='/images/chennaiLogo.png' style={{ width: "400px", height: "80px" }} alt="Chennai Logo" />
//       <img src='/images/G20_India_2023_logo.png' style={{ width: "180px", height: "70px" }} alt="G20 Logo" className="center-logo" />
//       <div className="social-icons">
//         <RiTwitterFill className="social-icon" />
//         <RiFacebookFill className="social-icon" />
//         <RiInstagramFill className="social-icon" />
//         <RiLinkedinFill className="social-icon" />
//       </div>
//       <nav className="header__nav">
//         <div className={`anchors ${menuOpen ? 'show-menu' : ''}`}>
//           <a href="#">Home</a>

//           <Dropdown title="Institute" icon={<RiHomeOfficeFill />}>
//             <DropdownItem title="About Us" icon={<RiUserLine />} />
//             <DropdownItem title="Vision & Mission" icon={<RiArrowUpDownLine />} />
//             <DropdownSubItem title="Board of Governors" icon={<RiGitRepositoryPrivateFill />} >
//               <DropdownItem title="BOG" icon={<RiChatPrivateFill />} />
//               <DropdownItem title="Finance Commitee" icon={<RiMoneyCnyCircleFill />} />
//               <DropdownItem title="Senate" icon={<RiChatPrivateLine />} />
//             </DropdownSubItem>
//             <DropdownItem title="Chairman Message" icon={<RiMessage3Fill />} />
//             <DropdownItem title="Director Message" icon={<RiMessage2Fill />} />
//             <DropdownItem title="Annual Report" icon={<RiNewspaperLine />} />
//           </Dropdown>

//           <Dropdown title="Administration" icon={<RiBuilding2Fill />}>
//             <DropdownItem title="Director" icon={<RiUserFollowFill />} />
//             <DropdownItem title="Chairman" icon={<RiUser3Fill />} />
//             <DropdownItem title="Deans" icon={<RiUser5Fill />} />
//             <DropdownSubItem title="Committees & Incharge" icon={<RiGitRepositoryPrivateFill />}>
//               <DropdownItem title="Office of Administration & Account" icon={<RiBankFill />} />
//               <DropdownItem title="Chief Vigilance Officer" icon={<RiRulerFill />} />
//               <DropdownItem title="Nodal Officer- Public Grievance" icon={<RiHomeOfficeLine />} />
//               <DropdownItem title="Estate Officer" icon={<RiUser2Fill />} />
//             </DropdownSubItem>
//             <DropdownItem title="Estate Office" icon={<RiHomeOfficeFill />} />
//             <DropdownItem title="Guest House" icon={<RiHome3Fill/>} />
//             <DropdownItem title="Stores and Purchase" icon={<RiStore2Fill />} />
//             <DropdownItem title="Minutes of BOG Meeting" icon={<RiShakeHandsFill/>} />
//             <DropdownItem title="Past Directors and Chairman" icon={<RiLogoutCircleFill/>} />
//             <DropdownSubItem title="Accounts Details" icon={<RiAccountCircleFill />}>
//               <DropdownItem title="New PAN,TAN & GSTIN Details" icon={<RiBankCard2Fill />} />
//             </DropdownSubItem>
//             <DropdownItem title="Staff of Admin & Accounts" icon={<RiUser6Fill />} />
//             <DropdownSubItem title="Policies & Rules" icon={<RiRefund2Line />}>
//               <DropdownItem title="Administration Rules" icon={<RiGitRepositoryLine />} />
//               <DropdownItem title="Account Rules" icon={<RiGitRepositoryPrivateFill />} />
//             </DropdownSubItem>
//             <DropdownItem title="Annual Property Returns" icon={<RiLogoutCircleFill/>} />
//             <DropdownItem title="Past Directors and Chairman" icon={<RiLogoutBoxFill/>} />
//           </Dropdown>

//           <Dropdown title="Academic" icon={<RiBook2Fill />}>
//             <DropdownItem title="Overview" icon={<RiUserFollowFill />} />
//             <DropdownItem title="AICTE-EOAReport" icon={<RiNewsFill />} />
//             <DropdownSubItem title="Faculty & Department" icon={<RiUser5Fill />}>
//               <DropdownSubItem title="Faculty of Engineering and Technology" icon={<RiFilePaper2Fill />} >
//               </DropdownSubItem>
//               <DropdownSubItem title="Faculty of Education" icon={<RiBook3Fill />} >
//               </DropdownSubItem>
//               <DropdownSubItem title="Faculty of Management" icon={<RiBankFill />} >
//               </DropdownSubItem>
//             </DropdownSubItem>
//             <DropdownItem title="Professional Development Program" icon={<RiProgress1Line />} />
//             <DropdownItem title="International Training Program" icon={<RiProgress3Line />} />
//             <DropdownSubItem title="National Coordinators" icon={<RiUser4Fill />}>
//               <DropdownItem title="SWAYAM" icon={<RiBook3Line />} />
//               <DropdownItem title="NITTTR" icon={<RiBookMarkedFill />} />
//             </DropdownSubItem>
//             <DropdownSubItem title="OER" icon={<RiRefund2Line />}>
//               <DropdownItem title="LMS" icon={<RiGitRepositoryLine />} />
//             </DropdownSubItem>
//           </Dropdown>

//           <Dropdown title="Study @ NITTTR" icon={<RiUser2Fill />} className="left-align">
//             <DropdownSubItem title="Salient Features" icon={<RiBootstrapFill />} >
//               <DropdownItem title="Fractal Mode" icon={<RiShapesLine />} />
//               <DropdownItem title="Online Learning" icon={<RiWebcamFill/>} />
//             </DropdownSubItem>
//             <DropdownSubItem title="PG Programms" icon={<RiShapesLine />} >
//               <DropdownItem title="M.Tech in Infracture Engineering and Management " icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in Mechtronics " icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in VLSI Design and Embedded Systems" icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in Power Electronics and Drives" icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in Artificial Intelligence and Machine Learning" icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in Agumented and Virtual Reality" icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.Tech in Engineering Education " icon={<RiBookOpenLine />} />
//               <DropdownItem title="M.B.A in Business Analytics " icon={<RiBookOpenLine/>} />
//               <DropdownItem title="M.B.A in Management" icon={<RiBookOpenLine/>} />
//             </DropdownSubItem>
//             <DropdownSubItem title="PG Diploma" icon={<RiBookMarkedLine/>} >
//               <DropdownItem title="PG Diploma in Guidance and counselling " icon={<RiBookOpenFill/>} />
//               <DropdownItem title="PG Diploma in Entrepreneurship Development" icon={<RiBookOpenFill/>} />
//               <DropdownItem title="PG Diploma in AI and ML" icon={<RiBookOpenFill/>} />
//             </DropdownSubItem>
//             <DropdownSubItem title="PG Certificate" icon={<RiBookMarkedLine/>} >
//               <DropdownItem title="All Certificates " icon={<RiBookOpenFill/>} />
//             </DropdownSubItem>
              
//             <DropdownSubItem title="Integrated Teacher Education Program" icon={<RiBookMarkedFill/>} >
//               <DropdownItem title="B.Sc,B.Edu" icon={<RiFilePaper2Fill />} />
//             </DropdownSubItem>
//             <DropdownSubItem title="Research" icon={<RiSearchEyeLine/>} >
//               <DropdownItem title="M. Tech. (By Research)" icon={<RiFilePaper2Fill />} />
//               <DropdownItem title="Ph.D. Degree in Engineering/ Technology" icon={<RiFilePaper2Fill />} />
//               <DropdownItem title="Ph.D. Degree in Engineering Education (Inter Disciplinary)" icon={<RiFilePaper2Fill />} />
//               <DropdownItem title="Ph.D. Degree in Science and Humanities" icon={<RiFilePaper2Fill />} />
//               <DropdownItem title="Ph.D. Degree in Management Sciences" icon={<RiFilePaper2Fill />} />
//             </DropdownSubItem>
            
//           </Dropdown> 

//           <Dropdown title="Admission" icon={<RiFilePaper2Line />} className="centres">
//             <DropdownItem title="Admission Policy" icon={<RiNewsLine/>} />
//             <DropdownItem title="PG Regulations" icon={<RiNotificationBadgeLine/>} />
//             <DropdownItem title="PHD Regulations" icon={<RiStickyNoteAddFill/>} />
//           </Dropdown>

//           <Dropdown title="Facilities" icon={<RiBuilding4Fill />} className="centres">
//             <DropdownItem title="sports" icon={<RiGamepadLine/>} />
//             <DropdownItem title="computer Centre" icon={<RiComputerFill />} />
//             <DropdownItem title="Resource Centre" icon={<RiWifiFill />} />
//             <DropdownItem title="Hostel" icon={<RiBankFill />} />
//           </Dropdown>

          
//           <Dropdown title="Information Corner" icon={<RiUser2Fill />} >
//           </Dropdown>
//           <Dropdown title="Recuritment" icon={<RiUser6Fill />}>
//               {/* as a example */}
//             <DropdownItem title="Faculty" icon={<RiUser3Fill />} />
//               <DropdownItem title="Staff" icon={<RiUser5Line/>} />
//               <DropdownItem title="Projects & Contract" icon={<RiProjector2Fill />} />
//           </Dropdown>
//           <Dropdown title="Announcement" icon={<RiSpeaker3Fill/>} >
//           </Dropdown>
//           <Dropdown title="Contact Us" icon={<RiUserFill />} >
//           </Dropdown>
          
//         </div>

//         <div className="nav__toggle" onClick={toggleMenu}>
//           {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './NavBar.css';
import { FaCaretRight, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const Dropdown = ({ title, isOpen, handleClick, children }) => {
  return (
    <li>
      <a href="#!" onClick={handleClick}>
        {title} <FaCaretDown />
      </a>
      {isOpen && <ul className="dropdown">{children}</ul>}
    </li>
  );
};

const SubDropdown = ({ title, isOpen, handleClick, children }) => {
  return (
    <li>
      <a href="#!" onClick={handleClick}>
        {title} <FaCaretRight />
      </a>
      {isOpen && <ul className="sub-dropdown">{children}</ul>}
    </li>
  );
};

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState({});
  const [clicked, setClicked] = useState(null);
  const [cindex, setCIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown({});
    setClicked(null);
  };

  const handleSubDropdownClick = (dropdownIndex, subIndex, key) => {
    setCIndex(subIndex);
    setOpenSubDropdown((prevState) => ({
      ...prevState,
      [dropdownIndex]: prevState[dropdownIndex] === subIndex ? null : subIndex,
    }));
    setClicked(clicked === subIndex ? null : subIndex);
    console.log(clicked, subIndex);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <Dropdown
          title="Institute"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/institute/about">About Us</a></li>
          <li><a href="/institute/about">Vision & Mission</a></li>
          <li><a href="/institute/about">Memorandum of Association </a></li>
          <SubDropdown
            title="Governing Bodies"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/institute/governing-bodies/chairman">BOG</a></li>
            <li><a href="/institute/governing-bodies/director">Finance Commitee</a></li>
            <li><a href="/institute/governing-bodies/reports">Senate</a></li>
          </SubDropdown>
          <li><a href="/institute/vision">Chairman Message</a></li>
          <li><a href="/institute/memorandum">Director Message</a></li>
          <li><a href="/institute/memorandum">Annual Report</a></li>
        </Dropdown>
        <Dropdown
          title="Administration"
          isOpen={openDropdown === 2}
          handleClick={() => handleDropdownClick(2)}
        >
          <li><a href="/administration/chairman">Chairman</a></li>
          <li><a href="/administration/Director">Director</a></li>
          <li><a href="/administration/Dean">Dean</a></li>
          <SubDropdown
            title="Committees & Incharge"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/administraction/Committees & Incharge/BOG">Office of Administration & Account</a></li>
            <li><a href="/administraction/Committees & Incharge/vigilance officer">Chief Vigilance Officer</a></li>
            <li><a href="/administraction/Committees & Incharge/estate officer">Nodal Officer - Public Grievance</a></li>
            <li><a href="/administraction/Committees & Incharge/estate officer">Estate Officer</a></li>
            <li><a href="/administraction/Committees & Incharge/estate officer">Grievance Redressal Committee</a></li>
          </SubDropdown>
          <li><a href="/administration/Estate Officer">Estate Office</a></li>
          <li><a href="/administration/Guest House">Guest House</a></li>
          <li><a href="/administration/Stores and Purchase">Stores and Purchase</a></li>
          <li><a href="/administration/Minutes of BOG Meeting">Minutes of BOG Meeting</a></li>
          <SubDropdown
            title="Accounts Details"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/administraction/Accounts Details/Details">New PAN,TAN & GSTIN Details</a></li>
          </SubDropdown>
          <li><a href="/administration/chairman">Staff of Admin & Accounts</a></li>
          <SubDropdown
            title="Policies & Rules"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/administraction/Policies & Rules/Administration Rules">Administration Rules</a></li>
            <li><a href="/administraction/Policies & Rules/Account Rules">Account Rules</a></li>
            <li><a href="/administraction/Policies & Rules/Admission Form">Admission Form </a></li>
          </SubDropdown>
          <li><a href="/administration/chairman">Annual Property Returns</a></li>
          <li><a href="/administration/chairman"></a></li>
        </Dropdown>
        <Dropdown
          title="Academics"
          isOpen={openDropdown === 3}
          handleClick={() => handleDropdownClick(3)}
        >
          <li><a href="/academics/programs">Overview</a></li>
          <li><a href="/academics/research">AICTE-EOAReport</a></li>
          <SubDropdown
            title="Faculty & Department"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/Faculty & Department/Faculty of Engineering and Technology">Faculty of Engineering and Technology</a></li>
            <li><a href="/Academics/Faculty & Department/Faculty of Education">Faculty of Education</a></li>
            <li><a href="/Academics/Faculty & Department/Faculty of Management">Faculty of Management</a></li>
          </SubDropdown>
          <li><a href="/academics/publications">Professional Development Program</a></li>
          <li><a href="/academics/publications">International Training Prrogram</a></li>
          <SubDropdown
            title="National Coordinators"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/Nationl Coordinators/SWAYAM">SWAYAM</a></li>
            <li><a href="/Academics/National Coordinators/NITTTR">NITTTR</a></li>
          </SubDropdown>
          <SubDropdown
            title="OER"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/OER/LMS">LMS</a></li>
          </SubDropdown>
        </Dropdown>
        <Dropdown
          title="Study @ NITTTR"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <SubDropdown
            title="Salient Features"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Salient Features/chairman">Fractal Mode</a></li>
            <li><a href="/Study @ NITTTR/Salient Features/chairman">Online Learning</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Programme"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Infracture Engineering and Management</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Mechtronics</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in VLSI Design and Embedded Systems</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Power Electronics and Drives</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Artificial Intelligence and Machine Learning</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Agumented and Virtual Reality</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.Tech in Engineering Education </a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.B.A in Business Analytics</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/chairman">M.B.A in Management</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Diploma"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Diploma/chairman">PG Diploma in Guidance and counselling</a></li>
            <li><a href="/Study @ NITTTR/PG Diploma/chairman">PG Diploma in Entrepreneurship Development</a></li>
            <li><a href="/Study @ NITTTR/PG Diploma/chairman">PG Diploma in AI and ML</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Certificate"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Certificate/chairman">All Certificate</a></li>
          </SubDropdown>
          <SubDropdown
            title="Integrated Teacher Education Program"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Integrated Teacher Education Program/chairman">B.Sc,B.Edu</a></li>
          </SubDropdown>
          <SubDropdown
            title="Research"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Research/chairman">M. Tech. (By Research)</a></li>
            <li><a href="/Study @ NITTTR/Research/chairman">Ph.D. Degree in Engineering/ Technology</a></li>
            <li><a href="/Study @ NITTTR/Research/chairman">Ph.D. Degree in Engineering Education (Inter Disciplinary)</a></li>
            <li><a href="/Study @ NITTTR/Research/chairman">Ph.D. Degree in Science and Humanities</a></li>
            <li><a href="/Study @ NITTTR/Research/chairman">Ph.D. Degree in Management Sciences</a></li>
          </SubDropdown>
        </Dropdown>
        <Dropdown
          title="Admission"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/Admission/about">Admission Policy</a></li>
          <li><a href="/Admission/about">PG Regulations</a></li>
          <li><a href="/Admission/about">PhD Regulations</a></li>
        </Dropdown>
        <Dropdown
          title="Facilities"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/Facilities/about">Sports</a></li>
          <li><a href="/Facilities/about">Computer Center</a></li>
          <li><a href="/Facilities/about">Resource Center</a></li>
          <li><a href="/Facilities/about">Hostel</a></li>
        </Dropdown>
        <Dropdown
          title="Information Corner"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/Information Corner/about">Fee Payment</a></li>
          <li><a href="/Information Corner/about">Mandatory Disclosure</a></li>
          <li><a href="/Information Corner/about">Equal Opportunity Policy </a></li>
          <li><a href="/Information Corner/about">News Letters</a></li>
          <li><a href="/Information Corner/about">Circular</a></li>
          <li><a href="/Information Corner/about">Bis Corner</a></li>
        </Dropdown>
        <Dropdown
          title="Recruitments"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="//about">Sports</a></li>
          <li><a href="/Recruitments/about">Faculty</a></li>
          <li><a href="/Recruitments/about">Staff</a></li>
          <li><a href="/Recruitments/about">Projects & Contract</a></li>
        </Dropdown>

        <li><a href="/admissions">Announcement </a></li>
        <li><a href="/facilities">Contact us</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
=======
import React, { useState } from 'react';
import './NavBar.css';
import { RiMenuLine, RiCloseLine, RiArrowDownSLine, RiPieChartLine, RiArrowUpDownLine, RiBarChartLine, RiAddLine, RiFileListLine, RiCashLine, RiRefund2Line, RiUserLine, RiLockLine, RiMessage3Line, RiHome7Fill, RiGitRepositoryPrivateFill, RiBookFill, RiMoneyDollarBoxFill, RiMailAddFill, RiUserShared2Line, RiUserFollowFill, RiUserSmileFill, RiUserReceived2Fill, RiUserShared2Fill, RiUserFill, RiSchoolFill, RiChatPrivateFill, RiProjector2Fill, RiHomeOfficeFill, RiBookMarkedFill, RiBookOpenFill } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    institute: false,
    administration: false,
    academics: false,
    centers: false,
    connect: false
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
    <header className="header">
      <img src='/images/chennaiLogo.png' style={{ width: "400px", height: "80px" }}></img>
      <nav className="header__nav">
        <div className="anchors">
          <a href="#">Home</a>
          <a href="#">Company</a>

          <div className={`dropdown__item ${dropdownOpen.institute ? 'active' : ''}`} onClick={() => toggleDropdown('institute')}>
            <div className="nav__link">
              Institute <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.institute ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.institute ? 'show' : ''}`}>
              <li><a href="#"><RiHome7Fill /> Homepage</a></li>
              <li><a href="#"><RiCashLine /> About Us</a></li>
              <li><a href="#"><RiGitRepositoryPrivateFill /> Board of Governs</a></li>
              <li><a href="#"><RiBookFill /> Academic Council</a></li>
              <li><a href="#"><RiCashLine /> Memorandum of Association</a></li>
              <li><a href="#"><RiMoneyDollarBoxFill /> Annual Reports</a></li>
              <li><a href="#"><RiMailAddFill /> News Letter</a></li>
            </ul>
          </div>

          <div className={`dropdown__item ${dropdownOpen.administration ? 'active' : ''}`} onClick={() => toggleDropdown('administration')}>
            <div className="nav__link">
              Administration <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.administration ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.administration ? 'show' : ''}`}>
              <li><a href="#"><RiUserShared2Fill /> Director</a></li>
              <li><a href="#"><RiUserFollowFill /> Chairman</a></li>
              <li><a href="#"><RiUserSmileFill /> Deans</a></li>
              <li><a href="#"><RiUserReceived2Fill/> Department Heads</a></li>
              <li><a href="#"><RiAddLine /> Committees & Incharges</a></li>
              <li><a href="#"><RiFileListLine /> Past Directors & Chairpersons</a></li>
              <li><a href="#"><RiCashLine /> Administration Dept.</a></li>
              <li><a href="#"><RiRefund2Line /> Annual Project Report</a></li>
            </ul>
          </div>

          <div className={`dropdown__item ${dropdownOpen.academics ? 'active' : ''}`} onClick={() => toggleDropdown('academics')}>
            <div className="nav__link">
              Academics <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.academics ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.academics ? 'show' : ''}`}>
              <li><a href="#"><RiPieChartLine /> Overview</a></li>
              <li><a href="#"><RiArrowUpDownLine /> Study @ NITTTR</a></li>
              <li><a href="#"><RiUserFill /> Faculty & Departments</a></li>
              <li><a href="#"><RiSchoolFill /> Learning for All</a></li>
              <li><a href="#"><RiChatPrivateFill /> Professional Development Program</a></li>
              <li><a href="#"><RiFileListLine /> International Training Program</a></li>
              <li><a href="#"><RiMessage3Line /> SWAYAM NITTT Modules</a></li>
            </ul>
          </div>

          <div className={`dropdown__item ${dropdownOpen.centers ? 'active' : ''}`} onClick={() => toggleDropdown('centers')}>
            <div className="nav__link">
              Centers & Facilities <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.centers ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.centers ? 'show' : ''}`}>
              <li><a href="#"><RiBookOpenFill /> Academics, Studies & Research</a></li>
              <li><a href="#"><RiArrowUpDownLine /> International Affairs</a></li>
              <li><a href="#"><RiHomeOfficeFill /> Resource Centre</a></li>
            </ul>
          </div>

          <div className={`dropdown__item ${dropdownOpen.connect ? 'active' : ''}`} onClick={() => toggleDropdown('connect')}>
            <div className="nav__link">
              Connect <RiArrowDownSLine className={`dropdown__arrow ${dropdownOpen.connect ? 'rotate' : ''}`} />
            </div>
            <ul className={`dropdown__menu ${dropdownOpen.connect ? 'show' : ''}`}>
              <li><a href="#"><RiUserFill/> Alumni</a></li>
              <li><a href="#"><RiUserLine /> Students</a></li>
              <li><a href="#"><RiProjector2Fill /> Projects & Awards</a></li>
            </ul>
          </div>

          <a href="#">Contact Us</a>

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
>>>>>>> 95f2947c3fa0ef79a6f9c8284e4ff431539646aa
