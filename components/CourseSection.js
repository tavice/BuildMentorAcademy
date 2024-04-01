import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function CourseSection(props) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);


  //Fetching Data

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(props.URL + "course");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.URL]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".course-card"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 5, stagger: 1, ease: "power3.out" }
    );
  }, [courses]);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-gradient-to-r from-gray-200 to-gray-400 py-12 px-10 rounded-lg relative overflow-hidden"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg mb-8 text-blue-800">
            Choose from a wide range of courses tailored for construction
            professionals.
          </p>
        </div>

        {isLoading ? (
          <p>Loading courses...</p>
        ) : error ? (
          <p>Error fetching courses: {error.message}</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-gray-200 to-gray-400 py-12 px-10 rounded-lg">
            {courses.map((course) => (
              <div
                key={course._id || course.title}
                className="course-card bg-white p-6 rounded-lg shadow-md"
              >
                <Image
                  src={course.image || "/course-image.jpg"}
                  alt={course.title || "Course Image"}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <h2 className="text-xl font-bold mt-4 text-gray-400">
                  {course.name}
                </h2>
                <p className="mt-2">{course.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4 transition duration-300">
                  Enroll Now
                </button>
                <p className="text-sm font-bold mt-4">
                  {course.duration} classes
                </p>
                <p className="text-2xl font-bold text-blue-500 mt-4">
                  ${course.price}
                </p>
           
              </div>
            ))}
          </section>
        )}
      </section>
    </>
  );
}
