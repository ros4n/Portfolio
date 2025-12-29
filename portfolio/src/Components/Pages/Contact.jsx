import React from 'react'

const Contact = () => {
    return (
        <section className="py-15 bg-code-bg text-code-text">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    <span className="text-code-comment">// </span>
                    <span className="gradient-text">Let's Connect</span>
                </h2>
                <p className="text-lg text-code-comment mb-12">
                    Ready to build something amazing together? Let's talk!
                </p>
                <div className="bg-code-surface border border-code-border rounded-lg p-8 max-w-2xl mx-auto">
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="code-font text-code-comment text-sm ml-2">contact.json</span>
                    </div>
                    <div className="code-font text-left space-y-2">
                        <div className="text-code-text">&#123;</div>
                        <div className="ml-4"><span className="text-code-string">"email"</span>: <span className="text-code-variable">"Roshan.Poudel@email.com"</span>,</div>
                        <div className="ml-4"><span className="text-code-string">"linkedin"</span>: <span className="text-code-variable">"linkedin.com/in/RoshanPoudel"</span>,</div>
                        <div className="ml-4"><span className="text-code-string">"github"</span>: <span className="text-code-variable">"github.com/RoshanPoudel"</span>,</div>
                        <div className="ml-4"><span className="text-code-string">"location"</span>: <span className="text-code-variable">"Chitwan, Nepal"</span>,</div>
                        <div className="ml-4"><span className="text-code-string">"status"</span>: <span className="text-code-variable">"Available for opportunities"</span></div>
                        <div className="text-code-text">&#125;</div>
                    </div>
                    <div className="mt-8 space-y-4">
                        <a className="bg-green-400 block text-code-bg px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors code-font w-full cursor-pointer"
                           href="mailto:yourname@gmail.com?subject=Portfolio%20Contact"
                        >
                            send_email()
                        </a>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" className="text-green-400 hover:text-green-300 code-font">GitHub</a>
                            <a href="#" className="text-green-400 hover:text-green-300 code-font">LinkedIn</a>
                            <a href="#" className="text-green-400 hover:text-green-300 code-font">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact
