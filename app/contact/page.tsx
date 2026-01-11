"use client"; 
import { Header } from "@/components/Header";
import { useState } from "react";
export default function ContactPage() {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState(""); 
  return (
    <div>
        <div>
            <Header/>
        </div>
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <div className="mb-6">
        <p>Button clicked: {count} times</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Click Me
        </button>
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Type your name..." 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full mb-2"
        />
        <p>Hello, {name || "!"}</p>
      </div>
    </div>
  );
}
