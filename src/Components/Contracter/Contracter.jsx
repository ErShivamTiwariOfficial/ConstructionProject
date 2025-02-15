// // src/components/OurServices.jsx
// // import React from 'react';
// // import Mason from './image_1.jpg';

// const contracter = [
//   {
//     id: 1,
//     title: "Architect",
//     description:
//       "Learn the essential tips to streamline your construction projects and deliver on time.",
//     // img: image_1,
//     date: "January 20, 2025",
//     author: "John Doe",
//   },
//   {
//     id: 2,
//     title: "Civil Engineering",
//     description:
//       "Explore the latest trends shaping the future of architectural designs worldwide.",
//     // img: image_2,
//     date: "January 18, 2025",
//     author: "Jane Smith",
//   },
//   {
//     id: 3,
//     title: "Mason",
//     description:
//       "Discover eco-friendly building materials that can help reduce your carbon footprint.",
//     // img: Mason,
//     date: "January 15, 2025",
//     author: "Emily Johnson",
//   },
//   {
//     id: 4,
//     title: "Carpenter",
//     description:
//       "Practical tips and tricks to give your home a fresh look without breaking the bank.",
//     // img: image_4,
//     date: "January 10, 2025",
//     author: "Michael Brown",
//   },
//   {
//     id: 5,
//     title: "Electrician",
//     description:
//       "Maximize your space with these innovative and stylish interior design ideas.",
//     // img: image_5,
//     date: "January 5, 2025",
//     author: "Sarah Lee",
//   },
//   {
//     id: 6,
//     title: "Plumber",
//     description:
//       "Uncover how cities are evolving with smart technology and sustainable practices.",
//     // img: image_6,
//     date: "January 2, 2025",
//     author: "David Kim",
//   },
//   // {
//   //   id: 1,
//   //   title: 'Architect',
//   //   description: 'High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed, providing a space that reflects your vision and lifestyle.',
//   //   icon: '🏠',
//   // },
//   // {
//   //   id: 2,
//   //   title: 'Civil Engineering',
//   //   description: 'High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed, providing a space that reflects your vision and lifestyle.',
//   //   icon: '🏠',
//   // },
//   // {
//   //   id: 3,
//   //   title: 'Mason',
//   //   description: 'High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed, providing a space that reflects your vision and lifestyle.',
//   //   icon: '🏠',
//   // },
//   // {
//   //   id: 4,
//   //   title: 'Carpenter',
//   //   description: 'Innovative and very efficient solutions for commercial spaces tailored to your business needs. Our team delivers projects that enhance productivity, aesthetics, and functionality, ensuring a thriving work environment.',
//   //   icon: '🏢',
//   // },
//   // {
//   //   id: 5,
//   //   title: 'Electrician',
//   //   description: 'Transform your spaces with our expert renovation and remodeling services. From concept to completion, we revitalize your property with modern designs and premium quality craftsmanship.',
//   //   icon: '🔧',
//   // },
//   // {
//   //   id: 6,
//   //   title: 'Plumber',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
//   // {
//   //   id: 7,
//   //   title: 'Welder',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
//   // {
//   //   id: 8,
//   //   title: 'Painter',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
//   // {
//   //   id: 9,
//   //   title: 'Tile Setter',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
//   // {
//   //   id: 10,
//   //   title: 'Roofer',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
//   // {
//   //   id: 11,
//   //   title: 'POP',
//   //   description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
//   //   icon: '📐',
//   // },
// ];

// const Contracter = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-16 bg-orange-500 dark:bg-orange-500 transition-colors duration-1000">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white dark:text-gray-800 mb-6">
//           Contracter
//         </h2>
//         <p className="text-lg text-white text-center dark:text-gray-700 mb-12">
//         Our services are designed to bring your vision to life with precision and excellence.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {contracter.map((service) => (
//             <div
//               key={service.id}
//               className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-200"
//               style={{ maxWidth: '300px', margin: '0 auto' }}
//             >
//               <div className="text-4xl mb-4 text-blue-500 flex justify-center">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-justify dark:text-gray-300">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contracter;

// src/components/ContracterSection.jsx
// import React from "react";
import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_3 from "./image_3.jpg";
import image_4 from "./image_4.jpg";
import image_5 from "./image_5.jpg";
import image_6 from "./image_6.jpg";

const ContracterSection = () => {
  const Contracter = [
    {
      id: 1,
      title: "Architecte",
      description:
        "Learn the essential tips to streamline your construction projects and deliver on time.",
      img: image_1,
      // date: "January 20, 2025",
      // author: "John Doe",
    },
    {
      id: 2,
      title: "Civil Engineering",
      description:
        "Explore the latest trends shaping the future of architectural designs worldwide.",
      img: image_2,
      date: "January 18, 2025",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Mason",
      description:
        "High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed, providing a space that reflects your vision and lifestyle.",
      img: image_3,
      date: "January 15, 2025",
      author: "Emily Johnson",
    },
    {
      id: 4,
      title: "Carpenter",
      description:
        "From blueprint to reality, we craft workspaces filled with heart, purpose, and possibility.",
      img: image_4,
      date: "January 10, 2025",
      author: "Michael Brown",
    },
    {
      id: 5,
      title: "Electrician",
      description:
        "Electricity is our craft, but your comfort and peace of mind are our true mission..",
      img: image_5,
      date: "January 5, 2025",
      author: "Sarah Lee",
    },
    {
      id: 6,
      title: "Plumber",
      description:
        "Uncover how cities are evolving with smart technology and sustainable practices.",
      img: image_6,
      date: "January 2, 2025",
      author: "David Kim",
    },
    {
      id: 7,
      title: "Welder",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
    {
      id: 8,
      title: "Painter",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
    {
      id: 9,
      title: "Tile Setter",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
    {
      id: 10,
      title: "Roofer",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
    {
      id: 11,
      title: "POP",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
    {
      id: 11,
      title: "Rental Tent House",
      description:
        "Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.",
        img: image_6,
        date: "January 2, 2025",
        author: "David Kim",
    },
  ];

  return (
    <section
      id="Contracter"
      className="bg-orange-500 dark:bg-orange-500 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6 text-center">
          Contracter
        </h2>
        <p className="text-lg text-white  text-center dark:text-gray-600 mb-10">
          Our Latest Contracters section keeps you updated with the newest
          trends and expert tips in the construction, architecture, and design
          industry.
        </p>

        {/* Contracter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Contracter.map((Contracter) => (
            <div
              key={Contracter.id}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-lg duration-200 overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={Contracter.img}
                alt={Contracter.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-orange-500">
                  {Contracter.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {Contracter.description}
                </p>
                {/* <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContracterSection;
