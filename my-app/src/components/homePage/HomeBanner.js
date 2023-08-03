// src/components/Banner.js
"use client";
import React from 'react';
import bannerImage from "../../assests/login.svg"; // Replace with the actual path to your image
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-blue-500 text-white">
      <div className=" container flex justify-around relative overflow-hidden p-5 ">
      <div className="my-8 justify-around ">
                <Image src={bannerImage} style={{
                    width:"15%",
                }}/>
            </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-end">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
            <p className="text-lg mb-8">
              Learn more about our services and products.
            </p>
            <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-blue-100">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
 
 
 
 );
};

export default Banner;