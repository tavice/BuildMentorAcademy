import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CourseSection(props) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error handling

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

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

  //console.log('courses are', courses);

  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-400 py-12 px-10 rounded-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
        <p className="text-lg mb-8">
          Choose from a wide range of courses tailored for construction
          professionals.
        </p>
      </div>

      {isLoading ? (
        <p>Loading courses...</p> 
      ) : error ? (
        <p>Error fetching courses: {error.message}</p> // Display error message
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-gray-200 to-gray-400 py-12 px-10 rounded-lg">
          {/* Course features will be rendered here based on fetched courses */}
          {courses.map((course) => (
            <div key={course._id || course.title} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={course.image || "/course-image.jpg"} // Default image
                alt={course.title || "Course Image"}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4">{course.title}</h2>
              <p className="mt-2">{course.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">
                    Enroll Now
                </button>
                <p className="text-sm font-bold mt-4">
                    {course.duration} classe
                </p>
                <p className="text-2xl font-bold text-blue-500 mt-4">
                    ${course.price}
                </p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}
