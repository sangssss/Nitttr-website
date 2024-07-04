import { useState } from 'react'


// import Header from './Home/Header/Header'
import Intro from './Home/Intro/Intro'

import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';
import './App.css';


function App() {


  return (
    <div >
    {/* <Header/> */}
    <Header/>
    
      <Intro />
  
  
  <Footer/>

    </div>
    
  )
}

export default App
