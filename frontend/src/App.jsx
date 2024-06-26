import { useState } from 'react'


import Header from './Home/Header/Header'
import Intro from './Home/Intro/Intro'


function App() {


  return (
    <div class='bg-slate-400'>
    <Header/>
    <div className="imgApp" style={{"position":"relative"}}>
        <img src="/images/institutionday.png" style={{"width":"100%", "height":"100vh", "filter" : "brightness(40%)"}}></img>
        <Intro/>
        </div>
  

    </div>
    
  )
}

export default App
