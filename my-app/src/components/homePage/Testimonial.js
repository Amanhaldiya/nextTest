// src/components/Testimonial.js
"use client";
// src/App.js
// src/App.js
// src/App.js



// src/components/TestimonialCard.js

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'hey',
    title: 'Yeahman',
    content: 'whatsUp',
  },
  {
    id: 2,
    name: 'hey',
    title: 'Yeahman',
    content: 'whatsUp',
  },
  {
    id: 3,
    name: 'hey',
    title: 'Yeahman',
    content: 'whatsUp',
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className='bg-blue-500'>
    <div className="max-w-3xl mx-auto mt-0 p-5">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full flex-shrink-0 flex justify-center items-center px-8 py-6 rounded-lg bg-white shadow-lg ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 absolute left-0'
              }`}
              style={{
                transform: `translateX(${(currentSlide - index) * 100}%)`,
              }}
            >
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.content}</p>
                <p className="text-blue-500 mt-2">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-0 flex justify-center space-x-2">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
