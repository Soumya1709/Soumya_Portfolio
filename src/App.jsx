import React from 'react'
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './Components/navBar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Achievements from './Components/Achievements.jsx'
import Contact from './Components/Contact.jsx'


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div> 

      <video src="/Background.mp4" autoPlay loop muted playsInline></video>
      <div className="fixed inset-0 -z-[1] bg-black/50"></div>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Project />
      <Achievements />
      <Contact />
      
    </div>
    </>
    

  )

}