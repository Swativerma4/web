
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='w-full h-[80px] py-16 bg-custom-gradient flex items-center px-2 md:px-[100px]  lg:px-[160px] fixed flex-col md:flex-row'>
      <div className='flex z-50  items-center w-full h-full gap-0 relative justify-center md:justify-between'>
       
        <div className='flex justify-center md:justify-start w-full md:w-auto'>
          <Image
            src={logo}
            alt='logo'
            width={150} 
            height={50} 
            className="object-contain"
          />
        </div>

        {/* Button */}
        <div className='hidden md:flex'>
          <button
            className='btn flex items-center justify-center bg-pink-500 text-white text-sm md:text-base rounded-full px-6 py-2 hover:bg-pink-600'
            style={{
              marginLeft: '32px', // Increased margin-left to create more gap between logo and button
              marginRight: '16px', // Adjusted margin-right for better alignment
            }}
          >
            <span className='flex items-center space-x-2'>
              <span>REGISTER NOW</span>
              <FaArrowRight className='text-white text-sm md:text-lg' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
