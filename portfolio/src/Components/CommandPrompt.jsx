import { useEffect, useRef, useState } from "react";

const COMMANDS = {
  help: `Available commands:
- help
- about
- skills
- projects
- clear`,

  about: `Hi, I'm Roshan 👋
A passionate web developer focused on React & backend systems.`,

  skills: `Skills:
- React
- JavaScript
- Node.js
- PostgreSQL
- Tailwind CSS`,

  projects: `Projects:
- Auction Platform
- Portfolio Website
- React Mini Apps`,
};

const CommandPrompt = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Roshan's Portfolio Terminal 🚀" },
    { type: "output", text: "Type 'help' to get started." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);


  const handleCommand = (e) => {
    e.preventDefault();

    const command = input.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setHistory([
     { type: "output", text: "Welcome to Roshan's Portfolio Terminal 🚀" },
    { type: "output", text: "Type 'help' to get started." },
    ]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", text: `$ ${command}` },
      {
        type: "output",
        text: COMMANDS[command] || `Command not found: ${command}`,
      },
    ]);

    setInput("");
  };

  return (
    <div   className=" text-gray-200 font-mono p-4 
                  max-w-6xl  shadow-xl mx-auto mt-5 ">
    <div className="bg-code-surface rounded-lg p-4"
    
      onClick={() => inputRef.current.focus()}
    >
      {/* Terminal Header */}
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Terminal Body */}
      <div className="overflow-y-auto h-[330px] pr-1">
        {history.map((item, index) => (
          <pre
            key={index}
            className={`whitespace-pre-wrap mb-1 ${
              item.type === "command"
                ? "text-blue-400"
                : "text-gray-300"
            }`}
          >
            {item.text}
          </pre>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleCommand} className="flex items-center mt-2">
        <span className="text-blue-400 mr-2">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          className="bg-transparent outline-none w-full text-gray-200 caret-blue-400"
        />
      </form>
    </div></div>
  );
};

export default CommandPrompt;
