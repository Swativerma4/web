import React from 'react'
import Image from 'next/image';
import Pic1 from "../public/pic1.png"
import Pic2 from "../public/pic2.png"
export default function Features() {
  return (
    <section className='py-12 px-6'>
      <div className='max-w-7xl mx-auto text-center '>
        <h2 className='text-3xl font-semibold mb-8'  >
        Our Game Changing Features
        </h2>
        <p className='mb-12 text-gray-500'>
        Our app and website offer game-changing features to boost customer retention, including powerful push notifications and advanced review and reputation management.
        </p>
        <div className='flex flex-col items-center justify-between mb-16'>
          <div className='w-full md:w-1/2 mb-6 md:mb-0'>
          <Image src={Pic1} 
          width={600}
          height={400}></Image>
          </div>
          <div className=' lg:w-1/2 lg:pl-10 mt-8 lg:mt-0 flex-col '>
            <h3 className='text-2xl font-semibold mb-4'>Bulk Push notifications</h3>
            <p className='mb-4'>
            Engage clients with real-time updates and personalized messages. Manage appointment, offer, and announcement notifications to boost engagement and drive repeat visits.
            </p>
          </div>
        </div>
       <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 lg:oder-2'>
          <Image src={Pic2}
          width={600}
          height={400}>
          </Image>
        </div>
        <div className='lg:w-1/2 lg:pr-10 mt-8 lg:mt-0 lg:order-1'>
          <h3 className='text-2xl font-bold mb-4'>
          Review & Reputatation managment
          </h3>
          <p className='text-gray-700'>
          Collect and monitor client reviews in real-time, boost your online presence, and make data-driven improvements to enhance your salon's reputation.

          </p>
        </div>
       </div>
      </div>
    </section>
  )
}
