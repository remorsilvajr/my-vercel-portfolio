"use client"; // This is required for interactivity (clicking buttons)

import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { Database, Server, Code2, User, LogIn } from "lucide-react";

export default function Home() {
  // 1. STATE: This tracks if the user is logged in
  const [user, setUser] = useState<string | null>(null);
  const [usernameInput, setUsernameInput] = useState("");

  // 2. FUNCTION: Handle the "Login" click
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput) {
      setUser(usernameInput); // "Log them in" (Simulated for now)
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-8 lg:p-24">
      
      {/* -------------------------------------------------- */}
      {/* VIEW 1: THE LOGIN SCREEN (If user is NOT logged in) */}
      {/* -------------------------------------------------- */}
      {!user ? (
        <div className="w-full max-w-md p-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/30 text-blue-400 mb-4">
              <LogIn size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome!</h1>
            <p className="text-gray-400 mt-2">Please sign in to view the portfolio.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Enter your name"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center"
            >
              Sign In
            </button>
          </form>
        </div>
      ) : (

      /* -------------------------------------------------- */
      /* VIEW 2: THE DASHBOARD (If user IS logged in)       */
      /* -------------------------------------------------- */
        <>
          <div className="text-center max-w-5xl mb-16 space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 text-green-400 text-sm font-medium border border-green-800">
              <User className="w-4 h-4 mr-2" />
              <span>User Dashboard</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight text-balance">
              Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">{user}</span>.
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl">
              I built this full-stack application with the modern Vercel stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl animate-in slide-in-from-bottom-4 duration-700">
            
            <FeatureCard title="My Backend" icon={Server}>
               Made with <strong>Node.js 22</strong> for the server architecture.
            </FeatureCard>

            <FeatureCard title="My Database" icon={Database}>
               I integrated a <strong>PostgreSQL 17</strong> database manually. 
            </FeatureCard>

            <FeatureCard title="My Design" icon={Code2}>
               I crafted this UI using <strong>Tailwind CSS</strong> and React components. 
               Focusing on clean, reusable code structure and modern aesthetics.
            </FeatureCard>

          </div>
          
          {/* Logout Button (Optional) */}
          <button 
            onClick={() => setUser(null)}
            className="mt-12 text-gray-500 hover:text-white underline text-sm"
          >
            Log out
          </button>
        </>
      )}
    </main>
  );
}