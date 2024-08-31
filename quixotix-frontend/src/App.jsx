import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Description from './Components/Description'
import Team from './Components/Team'
import Footer from './Components/Footer'
import './App.css'


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Description/>
    <Team/>
    <Footer/>
    </div>
  )
}

export default App;
