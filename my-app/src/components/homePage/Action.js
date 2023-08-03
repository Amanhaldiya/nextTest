"use client";
import React from 'react';
import Sign from "../../assests/sign.svg"; // Replace with the actual path to your image
import Image from "next/image";
const ActionSection = () => {
  // src/components/ActionSection.js

  return (
    <section className="h-3/5 bg-blue-800 flex items-center justify-center p-5"
        >
          
  
        <div className="items-center text-center">
       
      <Image src={Sign}
            alt="Action background"
            className="justify-center w-15 h-40"
            />
  
        <h2 className="text-4xl font-bold text-white mb-4 ">
          Welcome to My Task Manager
        </h2>
        <p className="text-lg text-white">
          Get organized and stay productive with our task management app.
        </p>
        <button className="mt-6 px-4 py-2 bg-white text-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};


export default ActionSection;