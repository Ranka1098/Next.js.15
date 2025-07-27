"use client";
import React, { useState } from "react";

const Header = () => {
  const [inputvalue, setInputValue] = useState("ashok");
  return (
    <div>
      <header>
        <nav className="border-4 border-black bg-slate-700 text-white p-2">
          <input
            type="text"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1 className="text-3xl text-center"> Header</h1>
        </nav>
      </header>
    </div>
  );
};

export default Header;
