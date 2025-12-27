import React from 'react'

 const Projects = () => {
     const projects = [
                {
                    title: "AI Code Optimizer",
                    description: "Machine learning model that optimizes code performance using AST analysis",
                    tech: ["Python", "TensorFlow", "LLVM"],
                    github: "#",
                    demo: "#"
                },
                {
                    title: "Distributed Computing Framework",
                    description: "High-performance distributed system for large-scale data processing",
                    tech: ["C++", "MPI", "CUDA"],
                    github: "#",
                    demo: "#"
                },
                {
                    title: "Real-time Analytics Dashboard",
                    description: "WebSocket-based dashboard for monitoring system metrics",
                    tech: ["React", "Node.js", "D3.js"],
                    github: "#",
                    demo: "#"
                }
            ];

  return (
   <section className="py-15 bg-code-surface text-code-text">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="text-code-comment">// </span>
                            <span className="gradient-text">Featured Projects</span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-code-bg border border-code-border rounded-lg p-6 hover:border-green-400 transition-colors">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="code-font text-code-comment text-sm ml-2">project_{index + 1}.md</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-green-400 code-font">{project.title}</h3>
                                    <p className="text-code-comment mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="bg-code-surface text-green-400 px-2 py-1 rounded text-sm code-font">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.github} className="text-green-400 hover:text-green-300 code-font text-sm">
                                            &lt;/github&gt;
                                        </a>
                                        <a href={project.demo} className="text-green-400 hover:text-green-300 code-font text-sm">
                                            &lt;/demo&gt;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
  )
}
export default Projects