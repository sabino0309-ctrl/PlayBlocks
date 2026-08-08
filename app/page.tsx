"use client";

import React, { useState } from "react";

export default function PlayBlocksEditor() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleRunProject = () => {
    setIsRunning(true);
    console.log("Compiling blocks to C++...");
    setTimeout(() => setIsRunning(false), 1500);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex justify-between items-center shadow-lg z-50">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="PlayBlocks Logo" className="w-10 h-10 rounded-full border border-sky-500 object-cover shadow-sm" />
          <h1 className="text-2xl font-extrabold text-sky-400 tracking-tight flex items-center space-x-2">
            <span>PlayBlocks</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-sky-950 text-sky-300 border border-sky-800 rounded-full">Blocks++</span>
          </h1>
          <nav className="flex space-x-2 ml-4">
            <button className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition shadow-sm">File</button>
            <button className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition shadow-sm">Edit</button>
            <button className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-sm font-medium transition shadow-sm">Extensions</button>
          </nav>
        </div>
        <div>
          <button 
            onClick={handleRunProject}
            className={`px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition flex items-center space-x-2 ${isRunning ? 'animate-pulse' : ''}`}
            disabled={isRunning}
          >
            <span>{isRunning ? "Compiling..." : "Run Project"}</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Block Palette */}
        <aside className="w-72 bg-slate-900/90 border-r border-slate-800 p-5 flex flex-col space-y-5">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Blocks Palette</h2>
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl text-sm font-semibold cursor-pointer border-l-4 border-sky-500 bg-sky-950/40 text-sky-200 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-sky-500/20 border-2 border-sky-400"></div>
              <span>Motion Blocks</span>
            </div>
            <div className="p-3 rounded-xl text-sm font-semibold cursor-pointer border-l-4 border-purple-500 bg-purple-950/40 text-purple-200 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-purple-500/20 border-2 border-purple-400"></div>
              <span>Looks Blocks</span>
            </div>
            <div className="p-3 rounded-xl text-sm font-semibold cursor-pointer border-l-4 border-amber-500 bg-amber-950/40 text-amber-200 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border-2 border-amber-400"></div>
              <span>Control Blocks</span>
            </div>
            <div className="p-3 rounded-xl text-sm font-semibold cursor-pointer border-l-4 border-rose-500 bg-rose-950/40 text-rose-200 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/20 border-2 border-rose-400"></div>
              <span>Java Classes</span>
            </div>
          </div>
        </aside>

        {/* Center: Visual Canvas */}
        <main className="flex-1 bg-slate-950 relative flex items-center justify-center border-r border-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="relative z-10 text-center text-slate-500 p-12 border-2 border-dashed border-slate-800 rounded-3xl bg-slate-900/25 max-w-sm">
            <p className="text-lg font-bold text-slate-300">Drag blocks here</p>
            <p className="text-xs text-slate-500 mt-1">Build your visual logic for native compilation</p>
          </div>
        </main>

        {/* Right Side: Code Shower */}
        <section className="w-96 bg-slate-900/90 border-l border-slate-800 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">C++ Code Shower</h2>
            <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE</span>
            </span>
          </div>
          <div className="flex-1 bg-slate-950 rounded-xl p-4 font-mono text-xs leading-relaxed overflow-y-auto border border-slate-800 shadow-inner">
            <code className="text-emerald-400">
              {`// Transpiled C++ output\n\nint main() {\n    // PlayBlocks initialized\n    // Drag blocks to see logic...\n    return 0;\n}`}
            </code>
          </div>
        </section>
      </div>
    </div>
  );
}
