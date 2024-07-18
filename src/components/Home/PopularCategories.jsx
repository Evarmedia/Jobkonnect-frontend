/* eslint-disable no-unused-vars */
import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="bg-[#f1f3f6] py-12">
      <div className="container mx-auto flex flex-col items-center gap-9 px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold">POPULAR CATEGORIES</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((element) => {
            return (
              <NavLink to={'/login'} key={element.id}>
                <div
                  className="bg-gray-200 p-5 flex items-center gap-3 shadow-sm shadow-gray-300 hover:shadow-lg transition-all duration-300 w-full sm:w-fit"
                  
                >
                  <div className="text-3xl p-2 bg-[#e9f9ff] text-[#2d5649] flex items-center justify-center">
                    {element.icon}
                  </div>
                  <div className="text">
                    <p className="text-lg font-bold">{element.title}</p>
                    <p className="text-sm font-light text-gray-500">
                      {element.subTitle}
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
