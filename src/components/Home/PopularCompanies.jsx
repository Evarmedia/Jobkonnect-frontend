/* eslint-disable no-unused-vars */
import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="bg-[#f1f3f6] py-12">
      <div className="w-full mx-auto flex flex-col items-center gap-2 ">
        <h3 className="text-2xl md:text-3xl font-semibold ">TOP COMPANIES</h3>
        <div className="flex py-5 flex-wrap justify-center gap-7 ">
          {companies.map((element) => {
            return (
              <div
                className="flex flex-col bg-white p-5 gap-4 hover:shadow-[2px_10px_10px_-1px_rgba(0,0,0,0.17)] transition-all duration-300"
                key={element.id}
              >
                <div className="flex items-center gap-4">
                  <div className="text-[24px] p-2 bg-[#e9f9ff] text-[#2d5649] flex justify-center items-center">
                    {element.icon}
                  </div>
                  <div className="text">
                    <p className="font-bold mb-1">{element.title}</p>
                    <p className="text-[15px] text-gray-500">{element.location}</p>
                  </div>
                </div>
                <button className="text-[#2d5649] bg-[#e9f9ff] font-bold text-[20px] border-none py-1.5 mt-2">
                  Open Positions {element.openPositions}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
