import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CommandPrompt from '../CommandPrompt';
const Hero = () => {
   const [isTyping, setIsTyping] = useState(true);
  return (<>
                <section className="pt-15 flex items-center justify-center bg-code-bg text-code-text overflow-x-hidden">
                    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="code-font text-code-comment">// Computer Engineer</div>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                <span className="text-code-text">Hello, I'm </span>
                                <span className="gradient-text glitch">Roshan</span>
                            </h1>
                            <div className="code-font text-xl text-code-comment">
                                <span className={isTyping ? 'typing-animation' : ''}>
                                    Building the future, one algorithm at a time
                                </span>
                            </div>
                            <p className="text-lg text-code-comment leading-relaxed">
                                Passionate computer engineer specializing in Frontend Development, 
                                machine learning, and high-performance computing. I transform 
                                complex problems into elegant solutions.
                            </p>
                            <div className="flex space-x-4">
                                <button 
                                    className="bg-green-400 text-code-bg px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors code-font hover:cursor-pointer"
                                >
                                        
                                    <NavLink to='/projects'>
                                    view_projects()
                                    </NavLink>
                                    
                                </button>
                                <button 
                                    onClick={() => setCurrentSection('contact')}
                                    className="border-2 border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-colors code-font hover:cursor-pointer"
                                >
                                    <NavLink to={'/contact'}>

                                    contact_me()
                                    </NavLink>
                                    
                                </button>
                            </div>
                        </div>
                        <div className="bg-code-surface border border-code-border rounded-lg p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="code-font text-code-comment text-sm ml-2">engineer.py</span>
                            </div>
                            <div className="code-font text-sm space-y-2">
                                <div><span className="text-code-keyword">class</span> <span className="text-code-function">ComputerEngineer</span>:</div>
                                <div className="ml-4"><span className="text-code-keyword">def</span> <span className="text-code-function">__init__</span>(self):</div>
                                <div className="ml-8">self.name = <span className="text-code-string">"Roshan Poudel"</span></div>
                                <div className="ml-8">self.role = <span className="text-code-string">"Computer Engineer"</span></div>
                                <div className="ml-8">self.skills = [<span className="text-code-string">"Python"</span>, <span className="text-code-string">"C++"</span>, <span className="text-code-string">"JS"</span>]</div>
                                <div className="ml-4"><span className="text-code-keyword">def</span> <span className="text-code-function">solve_problems</span>(self):</div>
                                <div className="ml-8"><span className="text-code-keyword">return</span> <span className="text-code-string">"Innovative solutions"</span></div>
                            </div>
                        </div>
                    </div>
                </section>
                <CommandPrompt/>
                </>
            );
}

export default Hero
