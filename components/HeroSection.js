import React from "react";
import Image from "next/image";
import { SolidStarIcon } from "@heroicons/react/solid";
// Import star icon from Heroicons

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-12 px-10 rounded-lg text-white p-12 flex">
      <div className="container mx-auto lg:w-1/2 lg:text-left lg:pr-20">
        <h1 className="text-4xl font-bold mb-4">
          Empower Your Construction Project Management Skills
        </h1>
        <p className="text-xl mb-8">
          Join BuildMentor Academy and unlock your potential in construction
          project management.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-blue-300 hover:text-white">
          Start Learning
        </button>

        {/* Quote and review section */}
        <div className="mt-8 flex items-center">
         
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-orange-500 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <quote className="text-sm">
            "I have taken several courses on project management, but this one
            was the best. It was easy to understand and the instructor was very
            knowledgeable." - John Doe
          </quote>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-gray-300">
        {/* Placeholder for image */}
        <Image
          src="https://picsum.photos/900"
          alt="Image Placeholder"
          width={900}
          height={900}
        />
      </div>
    </section>
  );
}

export default HeroSection;
