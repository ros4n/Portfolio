import React from 'react'

const About = () => {
  return (
    <section className="py-15 bg-code-surface text-code-text">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="text-code-comment">// </span>
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-code-comment">
                                    With  years of experience in computer engineering, I've dedicated my career 
                                    to pushing the boundaries of what's possible with code. My journey began with 
                                    curiosity about how computers work, and has evolved into a passion for creating 
                                    systems that can scale and solve real-world problems.
                                </p>
                                <p className="text-lg leading-relaxed text-code-comment">
                                    I specialize in Frontend Development architecture, machine learning algorithms, 
                                    and performance optimization. When I'm not debugging code at 3 AM, you can 
                                    find me contributing to open source projects or exploring the latest in 
                                    quantum computing research.
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-green-400 code-font">Core Values:</h3>
                                    <ul className="space-y-2 code-font">
                                        <li className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Clean, maintainable code</li>
                                        <li className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Continuous learning</li>
                                        <li className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Performance optimization</li>
                                        <li className="flex items-center"><span className="text-green-400 mr-2">&gt;</span> Team collaboration</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-code-bg border border-code-border rounded-lg p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="code-font text-code-comment text-sm ml-2">experience.json</span>
                                </div>
                                <div className="code-font text-sm space-y-1">
                                    <div className="text-code-text">&#123;</div>
                                    <div className="ml-4"><span className="text-code-string">"education"</span>: &#123;</div>
                                    <div className="ml-8"><span className="text-code-string">"degree"</span>: <span className="text-code-variable">"Computer Engineering"</span>,</div>
                                    <div className="ml-8"><span className="text-code-string">"university"</span>: <span className="text-code-variable">"Tribhuvan University"</span></div>
                                    <div className="ml-4">&#125;,</div>
                                    <div className="ml-4"><span className="text-code-string">"experience"</span>: <span className="text-code-variable">"3+ years"</span>,</div>
                                    <div className="ml-4"><span className="text-code-string">"focus"</span>: [</div>
                                    <div className="ml-8"><span className="text-code-variable">"Frontend Development"</span>,</div>
                                    <div className="ml-8"><span className="text-code-variable">"Machine Learning"</span>,</div>
                                    <div className="ml-8"><span className="text-code-variable">"Performance Engineering"</span></div>
                                    <div className="ml-4">],</div>
                                    <div className="ml-4"><span className="text-code-string">"location"</span>: <span className="text-code-variable">"Chitwan, Nepal"</span></div>
                                    <div className="text-code-text">&#125;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default About
