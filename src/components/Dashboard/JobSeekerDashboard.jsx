/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
              <svg
                className='w-4 h-4 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='search-value'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search for Jobs...'
              required
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 '
            >
              Search
            </button>
          </div>
        </div>

        <h1>ALL AVAILABLE JOBS</h1>
      </div>
      <div className="p-4">
        <h3>Render all jobs here via job cards</h3>
      </div>
    </section>
  );
};

export default JobSeekerDashboard;
