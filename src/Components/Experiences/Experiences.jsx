// src/components/ExperienceSection.jsx
// import React from 'react';
import { Link } from "react-scroll";
import exp from './exp.jpg';
import './style.css';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-4">
          Our Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-12">
          Our Experience is the key of our success.
        </p>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="transform hover:scale-105 transition-transform duration-300 md:pr-10">
          <img
            src={exp} // Replace with your image URL
            alt="Experience"
            className="rounded-lg shadow-md ml-5 experience"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:pl-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-6">
            30+ Years of Experience
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
          With over 30 years of experience in the construction industry, 
          we have built a strong reputation for excellence, innovation, and reliability.
           Our expertise spans residential, commercial, and large-scale projects, ensuring precision, quality, 
           and efficiency in every build. We combine advanced techniques, premium materials, 
           and sustainable practices to deliver outstanding results that meet and exceed client expectations. 
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
          Our dedicated team of professionals is committed to bringing your vision to life while maintaining the highest industry standards. 
          From concept to completion, 
          we ensure seamless project execution, making us a trusted partner in building the future with confidence and expertise.
          </p>
          <Link 
            to='project' 
            smooth={true}
            duration={600}
            className="px-6 py-3 text-white flex justify-center cursor-pointer w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 font-semibold rounded-lg hover:scale-100 transition shadow-lg duration-300">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
