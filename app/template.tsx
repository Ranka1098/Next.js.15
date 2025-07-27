// app/template.tsx
"use client";

import React, { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [inputValue, setInputValue] = useState("ashokkumar");
  return (
    <div className="border-4 border-green-600 p-2">
      <h3>📦 Template Wrapper</h3>
      <input
        type="text"
        name=""
        id=""
        className="border border-gray-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {children}
    </div>
  );
}
