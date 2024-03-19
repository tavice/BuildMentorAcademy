// Header.js
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">BuildMentor Academy</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Courses</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}