import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Style for desktop links and mobile links
    const linkStyle = ({ isActive }) => 
        `transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-[#8b949e] hover:text-green-400'}`;

    const navLinks = [
        { name: '.home()', path: '/' },
        { name: '.about()', path: '/about' },
        { name: '.skills()', path: '/skills' },
        { name: '.projects()', path: '/projects' },
        { name: '.contact()', path: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <NavLink to="/" className="code-font font-bold text-xl text-white"  >
                        &lt;<span className="text-green-400" onClick={()=> window.scrollTo({top:0,behavior:"smooth"})}>Roshan</span>/&gt;
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 code-font text-sm">
                        {navLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} className={linkStyle} onClick={()=> window.scrollTo({top:0,behavior:"instant"})}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none z-[60]"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-green-400 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-green-400 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-green-400 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Overlay (Blur background when menu is open) */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={toggleMenu}
            ></div>

            {/* Side Navbar (Slides from Right) */}
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#161b22] border-l border-[#30363d] z-[58] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col mt-24 px-8 space-y-8 code-font text-lg">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path} 
                            className={linkStyle}
                            onClick={toggleMenu} // Close menu when a link is clicked
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;