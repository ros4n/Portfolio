import React from 'react'

const Skills = () => {
const skills = [
                { name: 'Python', level: 95, color: '#3776ab' },
                { name: 'JavaScript', level: 90, color: '#f7df1e' },
                { name: 'React', level: 88, color: '#61dafb' },
                { name: 'Node.js', level: 85, color: '#339933' },
                { name: 'C++', level: 82, color: '#00599c' },
                { name: 'Machine Learning', level: 80, color: '#ff6f00' },
                { name: 'AWS', level: 78, color: '#ff9900' },
                { name: 'Docker', level: 75, color: '#2496ed' }
            ];
             const codeSnippets = {
                python: `def solve_problem():
    # Algorithm implementation
    result = optimize_solution()
    return result`,
                javascript: `const buildAwesome = async () => {
    const innovation = await create();
    return innovation.scale();
};`,
                cpp: `class Engineer {
    public:
        void innovate() {
            while(true) {
                code();
            }
        }
};`
            };
  return (
                <section className="py-15 bg-code-bg text-code-text">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center">
                            <span className="text-code-comment">// </span>
                            <span className="gradient-text">Technical Skills</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="code-font font-semibold">{skill.name}</span>
                                            <span className="code-font text-sm text-code-comment">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-code-surface rounded-full h-2">
                                            <div 
                                                className="h-2 rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    backgroundColor: skill.color
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                <div className="bg-code-surface border border-code-border rounded-lg p-6">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="code-font text-code-comment text-sm ml-2">skills.cpp</span>
                                    </div>
                                    <div className="code-font text-sm space-y-1">
                                        {codeSnippets.cpp.split('\n').map((line, i) => (
                                            <div key={i} className="text-code-text">{line}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-code-surface border border-code-border rounded-lg p-6">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="code-font text-code-comment text-sm ml-2">innovation.js</span>
                                    </div>
                                    <div className="code-font text-sm space-y-1">
                                        {codeSnippets.javascript.split('\n').map((line, i) => (
                                            <div key={i} className="text-code-text">{line}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
}

export default Skills
