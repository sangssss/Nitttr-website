import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './ImageSlider.css';

function ImageSlider() {
  const images = [
    { url: './images/g20.png' },
    { url: './images/g20.png' },
    { url: './images/g20.png' },
    // { url: four },
    // { url: five },
    // { url: six },
  ];

  return (
    <div className="slider-container__css">
      <SimpleImageSlider
        
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        className="slider__css"
        navStyle={2}
        navClass="nav__css"
        bulletStyle={1}
        bulletClass="bullet__css"
      />
    </div>
  );
}

export default ImageSlider;
