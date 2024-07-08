import { useState } from 'react'
// import Header from './Home/Header/Header'
import Intro from './Home/Intro/Intro'
// import Speakers from './Home/Speakers/Speakers'
import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';

import ImageSlider from './Home/ImageSlider/ImageSlider';
import './App.css';
import Speakers from './Home/Speakers/Speakers';
import QuickLinks from './Home/Quicklinks/Quicklinks.jsx';


function App() {


  return (
    <div >
    {/* <Header/> */}
    <Header/>
    {/* <Speakers/> */}
      {/* <Intro /> */}
  {/* <ImageSlider/> */}
  <Speakers/>
  <QuickLinks/>

  
  <Footer/>

    </div>
    
  )
}

export default App
