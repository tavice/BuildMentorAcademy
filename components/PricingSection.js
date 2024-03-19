// PricingSection.js
import React from "react";

export default function PricingSection() {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Basic</h3>
            <p className="text-gray-600 mb-4">Access to fundamental courses</p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$19.99/month</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Get Started</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Standard</h3>
            <p className="text-gray-600 mb-4">Access to standard and advanced courses</p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$29.99/month</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Get Started</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-gray-600 mb-4">Access to all courses + personalized mentorship</p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$49.99/month</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
