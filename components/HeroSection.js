import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroSection() {
  const path1 = `M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z`;
  const path2 = `M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z`;
  const path3 = `M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z`;

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // Get the gradient colors
    const gradientFromColor = 'blue';
    const gradientInBetweenColor = 'purple';
    const gradientToColor = 'orange';

    //console.log('gradient from is', gradientFromColor, 'gradient to is', gradientToColor);

    gsap.timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        container,
        { opacity: 1, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        ".shape-fill",
        { opacity: 0, scale: 0.8 },
        { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2 },
        "=0.5"
      )
      .fromTo(
        ".text-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
        "=0.8"
      );
      
    // Set the fill colors of the SVG paths
    gsap.set(".shape-fill", { fill: gradientToColor });
    gsap.set(".shape-fill:nth-child(2)", { fill: gradientInBetweenColor });
    gsap.set(".shape-fill:nth-child(3)", { fill: gradientFromColor });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-blue-400 to-orange-400 text-white pb-20 rounded-lg relative overflow-hidden"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <path d={path1} opacity=".15" className="shape-fill" />
        <path d={path2} opacity=".5" className="shape-fill" />
        <path d={path3} className="shape-fill" />
      </svg>
      <div
        ref={containerRef}
        className="container mx-auto text-center text-content relative z-10"
      >
        <h1 className="text-4xl font-bold mb-4 py-10">
          Empower Your Construction Project Management Skills
        </h1>
        <h2 className="text-2xl font-bold mb-4 pb-10">
          Join BuildMentor Academy and unlock your potential in construction
          project management.
        </h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-300">
          Start Learning
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
