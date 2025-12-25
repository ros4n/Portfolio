import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '../Components/Navbar';
import About from '../Pages/About';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Skills from '../Pages/Skills';
import ThreeScene from '../Pages/ThreeScene';
import Submitted from '../Pages/Submitted';
const App = () => {
  const boxRef = useRef();



  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-700 h-[100vh] w-full overflow-hidden font-mont font-bold relative">

      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/submit" element={<Submitted></Submitted>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
