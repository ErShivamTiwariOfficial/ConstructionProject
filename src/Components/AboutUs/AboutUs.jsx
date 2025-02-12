// src/components/AboutUs.jsx
// import React from 'react';
import { Link } from "react-scroll";
import checking from './checking.jpg';
import './About.css';

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:pl-8">
          <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-orange-600 dark:text-orange-600">
            About ApanaConstraction
          </h2>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
          Apana Construction is a premier construction firm known for its legacy of excellence. 
          With decades of industry experience, we specialize in delivering innovative, 
          high-quality solutions that are customized to meet your specific needs. 
          Our dedicated team of experts ensures that every project is executed on time, within budget, and to the highest standards of quality.
          </p>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
          We prioritize sustainable and eco-friendly practices, making a positive impact on the environment while 
          achieving exceptional results. At Apana Construction, we are committed to creating enduring structures that provide long-term 
          value for our clients. Our passion lies in transforming ideas into reality, delivering projects that stand the test of time.
          </p>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
          Driven by integrity and a focus on customer satisfaction, we distinguish ourselves in the industry. 
          Whether it is residential buildings, commercial developments,
           or innovative construction projects, our goal is to consistently exceed expectations and build lasting relationships with our clients.</p>
          
          <div className="flex justify-center">
            <Link
              to="services"
              smooth={true}
              duration={600}
              className="inline-block px-6 cursor-pointer py-3 w-full text-center bg-orange-500 text-white font-medium rounded hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 hover:scale-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group md:pr-8">
          <img
            src={checking}
            alt="About Us"
            className="rounded-lg about shadow-md mt-10 transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
