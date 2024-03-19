// ContactSection.js
import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gray-300 py-12 mt-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-lg text-center mb-8">
          Have a question or need assistance? Feel free to reach out to us.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-400 rounded-md p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
