import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

function App() {
    return (
        <div className="min-h-screen bg-[#0d1117]">
            <Navbar />
            <main className="pt-20"> {/* Padding for fixed navbar */}
                <Routes>
                    <Route path="/" element={<Hero />} />
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