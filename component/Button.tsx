"use client";
import { useState } from "react";
export function MyButton() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count : {count}</div>
      <button
        className="bg-red-500"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}