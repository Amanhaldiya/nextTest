// src/components/Feature.js

import React from 'react';

import { FaClipboardCheck, FaCalendarAlt, FaClock } from 'react-icons/fa'; // Import the necessary icons

const FeatureSection = () => {
  return (
   
        <div className="bg-blue-400 py-8">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-white mb-8">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Feature
                icon={<FaClipboardCheck className="text-4xl text-blue-200" />}
                title="Task Management"
                description="Efficiently manage your tasks with ease."
              />
              <Feature
                icon={<FaCalendarAlt className="text-4xl text-green-200" />}
                title="Deadline Tracking"
                description="Keep track of deadlines and stay organized."
              />
              <Feature
                icon={<FaClock className="text-4xl text-yellow-200" />}
                title="Time Management"
                description="Improve productivity with effective time management."
              />
              {/* Add more features here */}
            </div>
          </div>
        </div>
      );
    };
    const Feature = ({ icon, title, description }) => {
        return (
          <div className="flex flex-col items-center max-w-xs p-6 mx-auto bg-white rounded-lg shadow-md">
            {icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        );
      };
      
      export default FeatureSection;

  
