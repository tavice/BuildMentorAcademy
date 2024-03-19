import Image from "next/image";
import Head from "next/head";

//Import Components
import Header from "../components/Header";
import CourseSection from "../components/CourseSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

export default function Home() {
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
          {/* Course Section */}
          <CourseSection />

          {/* Testimonial Section */}
          <TestimonialSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Pricing Section */}
          <PricingSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
