// src/components/OurServices.jsx
// import React from 'react';

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'We provide high-quality, customized residential construction services to bring your dream home to life. With expert craftsmanship, premium materials, and sustainable practices, we ensure every detail is meticulously executed. From new builds to renovations, we create functional, stylish, and durable homes that reflect your vision and lifestyle.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Commercial Projects',
    description: 'We deliver innovative, efficient solutions for commercial spaces designed to meet your business needs. Our expert team focuses on functionality, aesthetics, and productivity, creating environments that foster success. From office buildings to retail spaces, we ensure high-quality execution, sustainability, and seamless project management for a thriving workspace.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Renovation Services',
    description: 'We create efficient, innovative commercial spaces tailored to your business needs. Our team prioritizes functionality, aesthetics, and sustainability to enhance productivity and success. From offices to retail spaces, we ensure seamless execution, high-quality craftsmanship, and modern design solutions that elevate your workspace and support long-term growth.',
    icon: '🔧',
  },
  {
    id: 4,
    title: 'Architecture Design',
    description: 'We create innovative, sustainable architectural designs that blend creativity with functionality. Our approach ensures aesthetically stunning and practical spaces tailored to your vision. By combining modern techniques with eco-friendly solutions, we deliver designs that enhance both form and function, creating environments that are both inspiring and efficient.',
    icon: '📐',
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-orange-500 dark:bg-orange-500 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white dark:text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-white text-center dark:text-gray-700 mb-12">
        Our services are designed to bring your vision to life with precision and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-200"
              style={{ maxWidth: '300px', margin: '0 auto' }}
            >
              <div className="text-4xl mb-4 text-blue-500 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-justify dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
