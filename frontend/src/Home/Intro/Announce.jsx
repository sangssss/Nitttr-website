import "./Announce.css";
import Marquee from 'react-fast-marquee';

function Announce() {
  return (
    // <div className="announce-container">
      <div className="marquee-container">
        <img src='/images/mic.png' className='mic' alt='mic'/>
        <Marquee speed={60} pauseOnHover gradient={true} className="marquee">
          <div className="announcement">
            <div className="announcement-text text1">
              <span>75th Republic Day celebrations - Live webcast</span>
            </div>
            <div className="announcement-text text1">
              <span>77th Independence Day Celebrations at IIT Madras - Live Webcast</span>
            </div>
            <div className="announcement-text text2">
              <span>Live Webcast of Independence Day Celebration</span>
            </div>
            <div className="announcement-text text1">
              <span>60th Convocation - Live Streaming</span>
            </div>
            <div className="announcement-text text1">
              <span>B.Tech. & Dual Degree Admission 2023</span>
            </div>
            <div className="announcement-text text1">
              <span>Faculty Recruitment 2023 - Rolling Advertisement for Assistant Professor</span>
            </div>
          </div>
        </Marquee>
        <img src='/images/mic.png' className='mic' alt='mic'/>
      </div>
    // </div>
  );
}

export default Announce;
