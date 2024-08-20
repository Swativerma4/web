import React from 'react';
import Image from 'next/image';
import girl1 from '../public/girl1.png';

export default function CTA() {
  return (
    <div className='flex justify-center items-center p-24 bg-[#dd4671] w-auto h-[250px]'>
      <div className='md:w-2/3 items-center text-white italic md:text-left p-4'>
        <h2 className='text-2xl md:text-3xl font-bold font-Playfair Display '>
        <h2 className='text-2xl md:text-3xl font-bold'>
  Join the Salonnz webinar and secure your seat for exclusive insights and offers! Don&apos;t miss out!
</h2>

            </h2>
        <div className='mt-4 '>
          <button className='btn-1 text-[#ED2E66] bg-white'>
            Watch Promo
          </button>
        </div>
      </div>
      <div className='md:w-[354px]  hidden md:block '>
        <Image
          src={girl1}
          alt='Girl'
          className='w-full h-auto object-cover'
          width={200} 
          height={200} 
                  />
      </div>
    </div>
  );
}

