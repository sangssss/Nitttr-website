import { useState } from 'react'


// import Header from './Home/Header/Header'
import Intro from './Home/Intro/Intro'
import Navbar from './Home/NavBar/NavBar'
import Footer from './Home/Footer/Footer';
// import './App.css';


function App() {


  return (
    <div class='bg-slate-400'>
    {/* <Header/> */}
    <Navbar/>
    <div className="imgApp" style={{"position":"relative"}}>
  
        <img src="/images/institutionday.png" style={{"width":"100%", "height":"100vh", "filter" : "brightness(40%)"}}></img> 
        <Intro/>
        
         </div>
  
  <Footer/>

    </div>
    
  )
}

export default App
