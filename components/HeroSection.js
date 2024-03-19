// HeroSection.js
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-20 rounded-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Empower Your Construction Project Management Skills</h1>
        <p className="text-lg mb-8">Join BuildMentor Academy and unlock your potential in construction project management.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-300">Start Learning</button>
      </div>
    </section>
  );
}
