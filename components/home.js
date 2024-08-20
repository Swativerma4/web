import Image from 'next/image';
import home from "../public/home1.png";
import '../app/globals.css';

const Header = () => {
  return (
    <header className="bg-custom-gradient text-white py-[4rem] lg:py-[10rem] xs:py-[8rem] sm:py-[6rem] text-center w-full h-auto min-h-[400px] overflow-auto">
      <div className="w-full lg:w-[1120px] mx-auto px-4 xs:px-4 sm:px-6 lg:px-20">
        <h1 className="text-[18px] xxs:text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] font-light mt-2 xs:mt-4 sm:mt-6">
          Discover the Future of Digital Salon
        </h1>
        <h2 className="text-[20px] xxs:text-[24px] xs:text-[28px] sm:text-[36px] md:text-[48px] font-bold mt-4 leading-tight">
          Exclusive <span className="underline decoration-pink-500">Webinar</span> on How to Boost Your Salon Business
        </h2>
        <p className="mt-4 text-[12px] xxs:text-[14px] xs:text-[16px] sm:text-[18px] italic">
          "The Best way to gain new clients is to focus on the ones you have"
        </p>
        <div className="mt-6">
          <button className="btn text-[12px] xxs:text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[20px] transition px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-2.5 lg:py-3">
            REGISTER NOW ➜
          </button>
        </div>
        <div className="w-full h-auto mt-6">
          <Image src={home} alt="Home Image" className="rounded-lg mx-auto" layout="responsive" />
        </div>
      </div>
    </header>
  );
};

export default Header;
