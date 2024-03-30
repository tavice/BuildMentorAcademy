// TestimonialSection.js
import React, {useState, useEffect} from "react";

export default function TestimonialSection(props) {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(props.URL + "testimony");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.URL]);

  //console.log("testimonials are", testimonials);


  return (
    <section className="bg-gray-200  py-8 mt-12 bg-gradient-to-r from-gray-400 to-gray-200 px-10 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Students Say
        </h2>

        {isLoading ? (
          <p>Loading testimonials...</p>
        ) : error ? (
          <p>Error fetching testimonials: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial features will be rendered here based on fetched testimonials */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id || testimonial.name}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="mb-4">{testimonial.testimony}</p>
                <p className="text-sm font-bold">
                  - {testimonial.name}, {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        )}
       
      </div>
    </section>
  );
}
