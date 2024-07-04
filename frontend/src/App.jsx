import { useState } from 'react'


<<<<<<< HEAD
// import Header from './Home/Header/Header'
=======
>>>>>>> 95f2947c3fa0ef79a6f9c8284e4ff431539646aa
import Intro from './Home/Intro/Intro'
import Navbar from './Home/NavBar/NavBar'

import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';
import './App.css';


function App() {


  return (
<<<<<<< HEAD
    <div >
    {/* <Header/> */}
    <Header/>
    
      <Intro />
=======
    <div class='bg-slate-400'>
    {/* <Header/> */}
    <Navbar/>
    <div className="imgApp" style={{"position":"relative"}}>
        <img src="/images/institutionday.png" style={{"width":"100%", "height":"100vh", "filter" : "brightness(40%)"}}></img>
        <Intro/>
        </div>
>>>>>>> 95f2947c3fa0ef79a6f9c8284e4ff431539646aa
  
  
  <Footer/>

    </div>
    
  )
}

export default App
