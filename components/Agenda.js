import React from 'react';

export default function Agenda() {
  return (
    <div className="flex flex-col items-center justify-center my-16  p-4">
      <div className="font-extrabold text-2xl text-center mb-4 sm:text-2xl lg:text-4xl  ">
        Key Takeaways From Our Quick <span className="text-red-500">45-Minute</span> Webinar
      </div>
      <p className="font-medium text-[15px] sm:text-xl   text-gray-500 text-center mb-8">
        Join us for a focused 45-minute session, covering key topics to give you valuable insights quickly and efficiently.
      </p>

      <div className="space-y-[-90px]  w-full max-w-4xl mt-[-5rem] ">
        {[
          { id: 1, title: 'Understanding Your Needs', time: '03:18 min - 05:00 min', description: "We'll explore your unique challenges as salon owners, from managing bookings and customer relationships to enhancing your online presence.", active: true },
          { id: 2, title: 'Introducing Salonnz', time: '05:01 min - 7:18 min', description: "Next, we'll introduce Salonnz, your all-in-one digital solution, covering your custom-branded website, mobile app, admin panel, and marketing tools designed to meet your needs.", active: false },
          { id: 3, title: 'Live Demonstration', time: '10:15 min - 30:32 min', description: 'Seeing is believing. Watch our live demo of Salonnz and see how effortlessly you can manage appointments, staff schedules, and customer interactions.', active: false },
          { id: 4, title: 'Exclusive Introductory Offers', time: '34:45 min - 38:02 min', description: 'Stay tuned for exclusive offers available only to webinar attendees. Plus, hear success stories from salon owners who have revolutionized their businesses with Salonnz.', active: false },
          { id: 5, title: 'Q&A Session', time: '38:05 min - 41:35 min', description: 'We value your input. In our final webinar segment, ask us anything and discover how Salonnz can benefit your business.', active: false },
        ].map((agenda) => (
          <div key={agenda.id} className="flex items-center space-x-4 group   ">
            
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center font-bold text-white px-7 py-4 transition-colors duration-300 ${
                  agenda.active
                    ? 'bg-red-500'
                    : 'bg-gray-300 group-hover:bg-red-500'
                }`}
              >
                Agenda {agenda.id}
              </div>
              <div
                className={`w-7 h-0 border-y-[28px] border-y-transparent transition-colors duration-300 ${
                  agenda.active
                    ? 'border-l-red-500'
                    : 'border-l-gray-300 group-hover:border-l-red-500'
                } border-l-[30px]`}
              ></div>
            </div>

            {/* Vertical line with circle */}
            <div className="flex flex-col items-center  ">
              <div
                className={`h-3 w-3 rounded-full transition-colors duration-300 mt-32  ${
                  agenda.active
                    ? 'bg-red-500'
                    : 'bg-gray-300 group-hover:bg-red-500'
                }`}
              ></div>
              <div
                className={`h-32 w-[2px] mt-3   transition-colors duration-300 ${
                  agenda.active
                    ? 'bg-red-500'
                    : 'bg-gray-300 group-hover:bg-red-500'
                }`}
              ></div>
            </div>

            {/* Agenda details */}
            <div className="flex-1 p-4 rounded-lg group-hover:text-red-500 transition-colors duration-300 mt-20">
              <h2 className="text-lg font-bold text-gray-500 group-hover:text-black">{agenda.title}</h2>
              <p
                className="text-[11px] text-gray-500 font-normal group-hover:text-black"
                style={{ lineHeight: '3' }}
              >
                {agenda.time}
              </p>
              <p className="mt-2 text-gray-700 group-hover:text-black">{agenda.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
