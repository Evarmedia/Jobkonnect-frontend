/* eslint-disable no-unused-vars */
// import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { FaRegEnvelope, FaRegFolder, FaUser } from "react-icons/fa";
import {
  MdClose,
  MdCreateNewFolder,
  MdOutlineNotificationsNone,
  MdOutlineSettings,
} from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Overview from "./Overview";
import Jobs from "./Jobs";
import CreateJob from "./CreateJob";

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const [view, setView] = useState("overview");
  const { isAuthorized, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderView = () => {
    switch (view) {
      case "overview":
        return <Overview />;
      case "view_appplication":
        return <Jobs />;
      case "createJob":
        return <CreateJob />;
      default:
        return <Overview />;
    }
  };

  // useEffect(() => {
  //   // Redirect to login if not authorized
  //   if (!isAuthorized) {
  //     navigate("/login"); // Navigate to login route
  //   }
  // }, [isAuthorized, navigate]);

  // if (!isAuthorized) {
  //   return null;
  // }

  return (
    <div className='flex bg-gray-100 lg:h-screen'>
      <aside className='hidden sm:flex sm:flex-col'>
        <div className='flex-grow flex flex-col justify-between text-gray-500 bg-gray-800'>
          <nav className='flex flex-col mx-4 my-6 space-y-4'>
            {/* overview side button */}
            <button
              onClick={() => setView("overview")}
              className='inline-flex items-center justify-center py-3 text-purple-400 hover:text-purple-600 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg'
              title='Overview'
            >
              <span className='sr-only'>Overview</span>
              <FaRegFolder className='text-3xl' />
            </button>

            <button
              onClick={() => setView("createJob")}
              className='inline-flex items-center justify-center py-3 text-purple-400 hover:text-purple-600 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg'
              title='Create Jobs'
            >
              <span className='sr-only'>YOUR Dashboard</span>
              <MdCreateNewFolder className='text-3xl' />
            </button>

            <button
              onClick={() => setView("view_appplication")}
              className='inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg'
              title="My Applications"
            >
              <span className='sr-only' title='My Applications'>
                My Applications
              </span>
              <FaPeopleGroup className='text-3xl' />
            </button>
          </nav>

          <div className='inline-flex items-center justify-center h-20 w-20 border-t border-gray-700'>
            <button className='p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg'>
              <span className='sr-only'>Settings</span>
              <MdOutlineSettings className='text-3xl' />
            </button>
          </div>
        </div>
      </aside>

      <div className='flex-grow text-gray-800'>

        <header className='relative flex items-center h-20 px-6 sm:px-10 bg-white'>
          {/* hambuger for dashboard */}

            {/* hamburger menu */}
            <div className={`${
              isOpen ? "block" : "hidden"
            } w-max p-2 absolute top-12 left-1 bg-white`}>
              <ul>
                <li onClick={() => setView("overview")} className="p-2 hover:bg-blue-500 rounded-md">Overview</li>
                <li onClick={() => setView("createJob")} className="p-2 hover:bg-blue-500 rounded-md">Create Jobs</li>
                <li onClick={() => setView("view_appplication")} className="p-2 hover:bg-blue-500 rounded-md">My Applications</li>
              </ul>
            </div>

            {/* hambuger button */}
          <button
              id='toggleOpen'
              className='sm:hidden flex items-center justify-center focus:outline-none'
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <HiOutlineMenuAlt2 className='text-2xl' />
              ) : (
                <MdClose className='text-2xl' />
              )}
            </button>

          <div className='ml-auto flex items-center'>
            <button className='flex items-center hover:text-purple-600 '>
              <MdOutlineNotificationsNone className='text-2xl' />
            </button>

            <div className='relative ml-4'>
              <button className='flex items-center'>
                <span className='sr-only'>User Menu</span>

                <div
                  className='rounded-full bg-gray-200 hover:text-purple-600'
                  title='profile'
                >
                  <FaUser className='text-3xl rounded-full cursor-pointer' />
                </div>
              </button>
            </div>
          </div>
        </header>
        <main className='p-6 sm:p-10 space-y-6'>
          <div className='flex-1 p-6'>{renderView()}</div>
        </main>
      </div>
    </div>
  );
};

export default EmployerDashboard;
