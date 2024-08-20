"use client"; // This makes the component a Client Component

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Product from "../public/Product.png";

const phrases = [
  { text: 'Salon Website', color:  '#ED0046' },
  { text: 'Customer App', color: '#6D4CEB' },
  { text: 'Staff App', color: '#2BD86A' },
  { text: 'Appointment Management', color: '#F5CE00' }
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const phrase = phrases[currentIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(phrase.text.slice(0, charIndex + 1));
      charIndex += 1;
      if (charIndex > phrase.text.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1500); 
      }
    }, 100); 

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center mt-8 md:mt-12 lg:mt-16 px-4 md:px-6 lg:px-8 h-auto">
      <div className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-center w-full max-w-[900px]">
        Transform Your Salon With A Single Platform With Our All-In-One Solution For <br />
        <span 
          className="inline-block" 
          style={{ color: phrases[currentIndex].color }}
        >
          {displayText}
        </span>
      </div>
      <div className="w-full max-w-[1000px] h-auto mt-6 md:mt-8 lg:mt-10 ">
        <Image src={Product}   alt="Product Image" layout="responsive" />
      </div>
    </div>
  );
};

export default Dashboard;
