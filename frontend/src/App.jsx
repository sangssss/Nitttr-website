import { useState } from 'react'


import Intro from './Home/Intro/Intro'
import Navbar from './Home/NavBar/NavBar'


function App() {


  return (
    <div class='bg-slate-400'>
    {/* <Header/> */}
    <Navbar/>
    <div className="imgApp" style={{"position":"relative"}}>
        <img src="/images/institutionday.png" style={{"width":"100%", "height":"100vh", "filter" : "brightness(40%)"}}></img>
        <Intro/>
        </div>
  

    </div>
    
  )
}

export default App
