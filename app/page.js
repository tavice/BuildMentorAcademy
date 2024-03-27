'use client'

//Import React
import React from "react";
import { useState, useEffect } from "react"; 



import Image from "next/image";
import Head from "next/head";

//Import Components
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CourseSection from "../components/CourseSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";



export default function Home() {

  const URL=process.env.NEXT_PUBLIC_URL;

  // console.log('URL is', URL);

  // const [courses, setCourses] = useState([]);
  // const [testimonies, setTestimonies] = useState([]);
 

  // useEffect(() => {
  //  fetch(URL + "course")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data))
  //     .catch((error) => console.log(error));

  //  fetch(URL + "testimony")
  //     .then((res) => res.json())
  //     .then((data) => setTestimonies(data))
  //     .catch((error) => console.log(error));
  // }, [
  //   URL,
  // ]);

  // console.log('testimonies are', testimonies);
  // console.log('course are', courses);

 


  return (
    <div>
      <Head>
        <title>
          BuildMentor Academy - Construction Project Manager Learning Platform
        </title>
        <meta
          name="description"
          content="BuildMentor Academy is a comprehensive online learning platform designed to empower construction project managers with the skills, knowledge, and mentorship they need to excel in their roles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Main Content */}
      <main className="bg-gray-100 py-12">
      
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="py-8">
          <HeroSection />
          </div>

          {/* Course Section */}
          <div className="py-8">
            <CourseSection URL={URL} />
          </div>

          {/* Testimonial Section */}
          <div className="py-8">
            <TestimonialSection URL={URL}/>
          </div>

          {/* Contact Section */}
          <div className="py-8">
            <ContactSection />
          </div>

          {/* Pricing Section */}
          <div className="py-8">
            <PricingSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
