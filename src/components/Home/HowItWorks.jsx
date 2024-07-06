/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdFindInPage } from "react-icons/md";

const HowItWorks = () => {
  return (
    <div className="bg-[#f1f3f6] py-12">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:px-8">
        <h3 className="text-3xl font-semibold">How JobKonnect Works</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white flex flex-col items-center text-center p-6 gap-3 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-96 md:w-80 lg:w-72 xl:w-64 h-80 md:h-72">
            <FaUserPlus className="text-4xl text-[#2d5649]" />
            <p className="text-lg font-medium">Create Account</p>
            <p className="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
          <div className="bg-[#18191c] text-white flex flex-col items-center text-center p-6 gap-3 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-96 md:w-80 lg:w-72 xl:w-64 h-80 md:h-72">
            <MdFindInPage className="text-4xl text-[#2d5649]" />
            <p className="text-lg font-medium">Find a Job/Post a Job</p>
            <p className="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
          <div className="bg-white flex flex-col items-center text-center p-6 gap-3 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-96 md:w-80 lg:w-72 xl:w-64 h-80 md:h-72">
            <IoMdSend className="text-4xl text-[#2d5649]" />
            <p className="text-lg font-medium">Apply For Job/Recruit Suitable Candidates</p>
            <p className="text-gray-500 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
