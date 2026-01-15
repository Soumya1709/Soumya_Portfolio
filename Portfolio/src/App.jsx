import React from 'react'
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './Components/navBar.jsx'
import Home from './Components/Home.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div> 
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
    </>
    

  )

}