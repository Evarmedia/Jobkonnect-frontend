// import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import heroCover from "/hero1.jpg";
import { NavLink } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <div className='font-sans text-[#fff]'>
        <div className='grid lg:grid-cols-2 items-center gap-y-6 bg-blue-500'>
          <div className='max-lg:order-1 max-lg:text-center sm:p-12 p-4'>
            <h2 className='lg:text-5xl text-3xl font-bold mb-4 lg:!leading-[56px]'>
            Connecting Tech Talent with Opportunities
            </h2>
            <p className='mt-4 text-base leading-relaxed'>
            Job Connect specialises in providing recruitment and labour hire services for businesses of all sizes.
            We provide permanent, temporary, contract and bulk placement in professional, white collar, blue collar and specialist trades.
            </p>
            <NavLink to='/login'>
              <button
                type='button'
                className='bg-transparent hover:bg-blue-600 border-2 border-white mt-10 transition-all text-white font-bold text-sm rounded-md px-6 py-2.5'
              >
                Get Started
              </button>
            </NavLink>
          </div>
          <div className='lg:h-[440px] flex items-center'>
            <img
              src={heroCover}
              className='w-full h-full object-cover'
              alt='Dining Experience'
            />
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 my-12'>
          <div className='bg-gray-100 p-6 rounded-md'>
          <MdOutlineSettings className="text-5xl inline-block mb-4 bg-white rounded-md text-blue-500 p-2" />
            <h3 className='text-xl font-bold mb-2 text-[#333]'>
              STAFFING
            </h3>
            <p className='text-sm text-[#333]'>
            Temporary/Contract/Permanent/Bulk
            </p>
            <a
              href='#'
              className='text-blue-600 font-bold inline-block text-sm mt-2 hover:underline'
            >
              Learn more
            </a>
          </div>
          <div className='bg-gray-100 p-6 rounded-md'>
          <BiSupport className="text-5xl inline-block mb-4 bg-white rounded-md text-blue-500 p-2" />
            <h3 className='text-xl font-bold mb-2 text-[#333]'>SUPPORT</h3>
            <p className='text-sm text-[#333]'>
              24/7 customer support for all your inquiries.
            </p>
            <a
              href='#'
              className='text-blue-600 font-bold inline-block text-sm mt-2 hover:underline'
            >
              Learn more
            </a>
          </div>
          <div className='bg-gray-100 p-6 rounded-md'>
          <AiOutlineStock className="text-5xl inline-block mb-4 bg-white rounded-md text-blue-500 p-2" />

            <h3 className='text-xl font-bold mb-2 text-[#333]'>CANDIDATE ASSESMENT</h3>
            <p className='text-sm text-[#333]'>
            Testing/Training/Inductions/
            Performance Management
            </p>
            <a
              href='#'
              className='text-blue-600 font-bold inline-block text-sm mt-2 hover:underline'
            >
              Learn more
            </a>
          </div>
          <div className='bg-gray-100 p-6 rounded-md'>
          <LuShieldCheck className="text-5xl inline-block mb-4 bg-white rounded-md text-blue-500 p-2" />
            <h3 className='text-xl font-bold mb-2 text-[#333]'>CONSULTING</h3>
            <p className='text-sm text-[#333]'>
            Industrial Relations/Human Resources/Occupational Health and Safety
            </p>
            <a
              href='#'
              className='text-blue-600 font-bold inline-block text-sm mt-2 hover:underline'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
