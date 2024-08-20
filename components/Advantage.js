"use client";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";

function Advantages() {
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);

  const advantages = [
    {
      title: "Increasing a customer loyalty",
      description:
        "Continuous customer interaction makes them feel special and builds trust, enhancing their loyalty to your business.",
      image: img1,
    },
    {
      title: "Attracting and retaining an audience",
      description:
        "Sharing relevant info boosts app recommendations, attracting new users and widening reach.",
      image: img2,
    },
    {
      title: "Optimization and automation of business",
      description:
        "Besides marketing benefits, the application controls the work of employees, simplifies all daily activities, increases productivity.",
      image: img3,
    },
    {
      title: "Direct Customer Communication Channel",
      description:
        "Push notifications about offers and discounts encourage more frequent use of your services.",
      image: img4,
    },
    {
      title: "Brand Awareness",
      description:
        "Developing a business app boosts brand awareness, serves as advertising, and enhances reputation and credibility.",
      image: img5,
    },
  ];

  return (
    <div className="mx-auto  px-[100px] py-[100px] pt-24">
      <h2 className="text-3xl font-bold text-center mb-8  lg:text-4xl mt-[-7rem]">
        Advantages Of Having A Salon App
      </h2>
      <p className="text-center text-lg mb-12 text-gray-600 justify-center">
        Uncover how a salon app boosts customer loyalty, expands your audience, optimizes operations, and strengthens brand awareness
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-lg shadow-md ${
              selectedAdvantage === index ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedAdvantage(index)}
          >
            <Image
              src={advantage.image}
              alt={advantage.title}
              className="rounded-t-lg"
              width={500}  
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-[600]  mb-2">{advantage.title}</h3>
              <p className="text-gray-700 text-sm">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantages;
