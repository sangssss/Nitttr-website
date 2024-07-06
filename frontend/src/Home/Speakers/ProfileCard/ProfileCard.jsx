// import React from 'react'
// import "./ProfileCard.css"
// function ProfileCard({imageUrl,Name,Proficiency,Description}) {
//     const img = document.querySelector("img");
//     const icons = document.querySelector(".icons");
//     img.onclick = function(){
//       this.classList.toggle("active");
//       icons.classList.toggle("active");
//     }
//   return (
//     <div class="profilecontainer">
//     <div class="profilewrapper">
//        <a href="#">
//        <img src={imageUrl} alt={Name}/>
//        </a>
//        <div class="profiletitle">
//           {Name}
//        </div>
//        {/* <div class="profileplace">
//           {Proficiency}
//        </div> */}
//     </div>
//     <div class="profilecontent">
//        <p>
//           {Description}
//        </p>
       
//     </div>
    
//  </div>
//   )
// }

// export default ProfileCard;
import React, { useState } from 'react';
import "./ProfileCard.css"

function ProfileCard({ imageUrl, Name, Proficiency, Description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="profilecontainer">
      <div className="profilewrapper">
        <a href="#">
          <img src={imageUrl} alt={Name} />
        </a>
        <div className="profiletitle">{Name}</div>
        < h4 className="profileplace">{Proficiency}</h4>
      </div>
      <div className="profilecontent">
        <p className={showMore ? 'show-more' : 'show-less'}>{Description}</p>
        {!showMore && (
          <button className="read-more" onClick={() => setShowMore(!showMore)}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
