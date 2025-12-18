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

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(boxRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3, 
        ease: 'ease-in',
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-700 h-[100vh] w-full overflow-hidden font-mont font-bold relative">
      <div
        className="w-5 h-5 bg-black rounded-full opacity-50 absolute z-20 top-0 left-0"
        ref={boxRef}
      ></div>

      <div className="mx-auto my-0 lg:mx-50 relative z-10">
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
