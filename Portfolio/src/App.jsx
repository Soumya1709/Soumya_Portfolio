import React from 'react'
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './Components/navBar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'
import Videobg from './assets/Background.mp4'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div> 

      <video src={Videobg} autoPlay loop muted></video>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Project />
      <Contact />
      
    </div>
    </>
    

  )

}