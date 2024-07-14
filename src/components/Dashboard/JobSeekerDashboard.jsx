/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { IoSearch } from "react-icons/io5";
import MyJobs from "../Job/MyJobs";
const JobSeekerDashboard = () => {
  const navigate = useNavigate();

  const { isAuthorized, user } = useContext(AuthContext);

  useEffect(() => {
    // Redirect to login if not authorized
    if (!isAuthorized) {
      navigate("/login"); // Navigate to login route
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) {
    return null;
  }
  return (
    <section className=''>
      <div className='flex justify-end items-center gap-2 mr-4'>
        <h1 className='font-bold text-lg text-right p-2'>WELCOME $USER</h1>
        <FaUser className='text-3xl rounded-full border-2 border-red-700 cursor-pointer' />
      </div>
      <div className='flex justify-center flex-col items-center'>
        {/* Search here */}
        <div className='m-2'>
          <label
            htmlFor='search-value'
            className='mb-2 text-sm font-medium sr-only'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <IoSearch className="text-2xl" />
            </div>
            <input
              type='search'
              id='search-value'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search for Jobs...'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 '
            >
              Search
            </button>
          </div>
        </div>

        </div>
      <div className="p-4">
        <h3><MyJobs /></h3>
      </div>
    </section>
  );
};

export default JobSeekerDashboard;
