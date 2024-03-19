// TestimonialSection.js
import React from "react";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-200 py-8 mt-12 bg-gradient-to-r from-gray-400 to-gray-200 px-10 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "BuildMentor Academy helped me enhance my construction project
              management skills significantly. The courses are well-structured
              and packed with practical insights."
            </p>
            <p className="text-sm font-bold">
              - John Doe, Construction Project Manager
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "I highly recommend BuildMentor Academy to anyone looking to
              advance their career in construction project management. The
              instructors are experts in the field, and the learning experience
              is top-notch."
            </p>
            <p className="text-sm font-bold">- Jane Smith, Civil Engineer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              "The knowledge and skills I gained from BuildMentor Academy have
              been invaluable in my role as a construction project manager. I've
              been able to tackle complex projects with confidence and
              efficiency."
            </p>
            <p className="text-sm font-bold">
              - Michael Johnson, Construction Professional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
