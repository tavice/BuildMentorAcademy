// CourseSection.js
import React from "react";
import Image from "next/image";

export default function CourseSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Course Feature 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/course-image-1.jpg"
          alt="Course Image 1"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">
          Construction Project Management Fundamentals
        </h2>
        <p className="mt-2">
          Master the foundational principles of construction project management
          in this comprehensive course.
        </p>
      </div>

      {/* Course Feature 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/course-image-2.jpg"
          alt="Course Image 2"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">
          Advanced Construction Techniques
        </h2>
        <p className="mt-2">
          Explore advanced strategies and techniques used in modern construction
          projects.
        </p>
      </div>

      {/* Course Feature 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Image
          src="/course-image-3.jpg"
          alt="Course Image 3"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">
          Effective Leadership in Construction
        </h2>
        <p className="mt-2">
          Develop leadership skills tailored for the construction industry and
          lead your teams to success.
        </p>
      </div>
    </section>
  );
}
