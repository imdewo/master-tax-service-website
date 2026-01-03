 
"use client";
import { useState } from "react";

export default function ClientLogin() {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Client Portal</h2>
      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Login (Secure Link)
      </button>
    </div>
  );
}
