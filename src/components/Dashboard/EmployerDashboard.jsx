/* eslint-disable no-unused-vars */
// import React from 'react';
import DashNav from "../Layout/DashNav";
import { useContext, useState } from "react";
import { FaRegFolder, FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  MdClose,
  MdCreateNewFolder,
  MdOutlineNotificationsNone,
  MdOutlineSettings,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { BsFillSuitcaseLgFill } from "react-icons/bs";
import Overview from "./Overview";

import CreateJob from "../Job/CreateJob";
import MyApplications from "../Application/MyApplications";
import MyJobs from "../Job/MyJobs";
import { useLocation } from "react-router-dom";

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const routerLocation = useLocation();

  const [view, setView] = useState(routerLocation.state?.view || "overview");

  const navigateWithState = (newView) => {
    navigate(".", { state: { view: newView } });
    setView(newView);
  };

  const { isAuthorized, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  if (!isAuthorized) {
    return null;
  }

  // incase of a search functionality change
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const renderView = () => {
    switch (view) {
      case "overview":
        return <Overview />;
      case "view_appplication":
        return (
          <div>
            <h1 className='text-center font-bold text-2xl mt-4'>
              APPLICATIONS PAGE
            </h1>
            <MyApplications />
          </div>
        );
      case "createJob":
        return <CreateJob />;
      case "viewjobs":
        return (
          <div>
            <h1 className='text-2xl font-bold mt-2'>Employer Jobs page</h1>
            {/* Filter... Extract to a component later */}
            <div className='flex space-x-4 my-4'>
              <select
                value={jobType}
                onChange={handleJobTypeChange}
                className='p-2 border border-gray-300 font-semibold rounded-md'
              >
                <option value=''>All Job Types</option>
                <option value='full-time'>Full Time</option>
                <option value='part-time'>Part Time</option>
                <option value='contract'>Contract</option>
              </select>
              <select
                value={location}
                onChange={handleLocationChange}
                className='p-2 border border-gray-300 font-semibold rounded-md'
              >
                <option value=''>All Locations</option>
                <option value='nairobi'>Nairobi</option>
                <option value='south africa'>South Africa</option>
                <option value='london'>London</option>
                <option value='Lagos'>Lagos</option>
              </select>
            </div>
            <div className="">
              <MyJobs
                searchQuery={searchQuery}
                jobType={jobType}
                location={location}
              />
            </div>
          </div>
        );
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <DashNav />
      <div className='flex bg-gray-100 min-h-screen'>
        {/* side bar */}
        <aside className='hidden sm:flex sm:flex-col'>
          <div className='flex-grow flex flex-col justify-between text-gray-500 bg-gray-800'>
            <nav className='flex flex-col mx-4 my-6 space-y-4'>
              {/* overview side buttons */}
              <button
                onClick={() => navigateWithState("overview")}
                className='inline-flex items-center justify-center py-3 text-blue-600 hover:bg-gray-300 focus:bg-white rounded-lg'
                title='Overview'
              >
                <span className='sr-only'>Overview</span>
                <FaRegFolder className='text-3xl' />
              </button>
              {/* create job side buttons */}
              <button
                // onClick={() => setView("createJob")}
                onClick={() => navigateWithState("createJob")}
                className='inline-flex items-center justify-center py-3 text-blue-600 hover:bg-gray-300 focus:bg-white rounded-lg'
                title='Create Jobs'
              >
                <span className='sr-only'>Your Dashboard</span>
                <MdCreateNewFolder className='text-3xl' />
              </button>
              {/* View applications side buttons */}
              <button
                // onClick={() => setView("view_appplication")}
                onClick={() => navigateWithState("view_appplication")}
                className='inline-flex items-center justify-center py-3 text-blue-600 hover:bg-gray-300 focus:bg-white rounded-lg'
                title='My Applications'
              >
                <span className='sr-only' title='My Applications'>
                  My Applications
                </span>
                <FaPeopleGroup className='text-3xl' />
              </button>
              {/* View jobs side buttons */}
              <button
                onClick={() => setView("viewjobs")}
                className='inline-flex items-center justify-center py-3 text-blue-600 hover:bg-gray-300 focus:bg-white rounded-lg'
                title='My Jobs'
              >
                <span className='sr-only' title='My Applications'>
                  My Jobs
                </span>
                <BsFillSuitcaseLgFill className='text-3xl' />
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
          <header className='relative flex items-center h-12 px-4 sm:px-2 bg-white'>
            {/* hambuger for dashboard */}
            {/* hamburger menu */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-max p-2 absolute top-12 left-1 bg-white z-10 lg:hidden`}
            >
              <ul>
                <li
                  onClick={() => setView("overview")}
                  className='p-2 hover:bg-blue-500 rounded-md'
                >
                  Overview
                </li>
                <li
                  onClick={() => setView("createJob")}
                  className='p-2 hover:bg-blue-500 rounded-md'
                >
                  Create Jobs
                </li>
                <li
                  onClick={() => setView("view_appplication")}
                  className='p-2 hover:bg-blue-500 rounded-md'
                >
                  My Applications
                </li>

                <li
                  onClick={() => setView("viewjobs")}
                  className='p-2 hover:bg-blue-500 rounded-md'
                >
                  My Jobs
                </li>

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

            {/* Notification/profile */}
            <div className='flex items-center w-full justify-between'>
              <h1 className='font-semibold text-lg text-right p-2 capitalize'>
                Welcome {`${user.username}`}
              </h1>
              <div className='flex'>
                <button className='flex items-center hover:text-blue-600 '>
                  <MdOutlineNotificationsNone className='text-2xl' />
                </button>
                <div className='relative ml-2'>
                  <button className='flex items-center'>
                    <span className='sr-only'>User Menu</span>
                    <div
                      className='rounded-full bg-gray-200 hover:text-blue-600'
                      title='profile'
                    >
                      <FaUser className='text-3xl rounded-full cursor-pointer' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className='max-h-screen p-2'>
            {renderView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
