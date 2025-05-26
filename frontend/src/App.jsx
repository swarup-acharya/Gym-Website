import React from 'react'
import './App.css'
import {BrowserRouter, Routes  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import BmiCal from "./components/BmiCal";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      
          <Navbar/>
          <Hero/>
          <WorkoutSession/>
          <Gallery/>
          <Pricing/>
          <Contact/>
          <BmiCal/>
          <Footer/>
          <ToastContainer theme='dark' position='top-center'/>

        
        
      </BrowserRouter>
    </div>
  )
}

export default App