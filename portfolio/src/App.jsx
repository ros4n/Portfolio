import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Pages/Hero.jsx';
import About from './Components/Pages/About.jsx';
import Skills from './Components/Pages/Skills.jsx';
import Projects from './Components/Pages/Projects.jsx';
import Contact from './Components/Pages/Contact.jsx';
import CommandPrompt from './Components/CommandPrompt.jsx';

function App() {
    return (
        <div className="min-h-screen bg-[#0d1117]">
            <Navbar />
            <main className="pt-20"> {/* Padding for fixed navbar */}
                <Routes>
                    <Route path="/" element={<Hero /> }/>
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
                
            
        </div>
    );
}

export default App;