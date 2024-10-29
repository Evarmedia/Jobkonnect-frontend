import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { IoSearch } from "react-icons/io5";
import MyJobs from "../Job/MyJobs";
import Navbar from "../Layout/DashNav";

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const { isAuthorized, user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) {
    return null;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='pb-10'>
      <Navbar />
      {/* user navbar */}
      <div className='flex justify-between items-center gap-2 mr-2 sm:mr-4 '>
       <NavLink to={`/my_applications`}>
         <h1 className="shadow-md p-2 hover:text-blue-600 hover:underline hover:shadow-none font-semibold text-lg tracking-tight">Applications</h1>
       </NavLink>
       <div className="flex items-center gap-2 p-2  ">
         <h1 className='font-semibold text-lg capitalize'>
           Welcome {`${user.username}`}
         </h1>
         <FaUser className='text-3xl rounded-full border-2 border-red-700 cursor-pointer' />
       </div>
      </div>
      <div className='flex justify-center flex-col sm:flex-row gap-5 items-center'>
        {/* Search */}
        <div className=''>
          <label
            htmlFor='search-value'
            className='mb-2 text-sm font-medium sr-only'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <IoSearch className='text-2xl' />
            </div>
            <input
              type='search'
              id='search-value'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search for Jobs...'
              value={searchQuery}
              onChange={handleSearchChange}
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

        {/* filter Functions */}
        <div className='flex space-x-4 mt-2'>
          <select
            value={jobType}
            onChange={handleJobTypeChange}
            className='p-2 border border-gray-300 rounded-md'
          >
            <option value=''>All Job Types</option>
            <option value='full-time'>Full Time</option>
            <option value='part-time'>Part Time</option>
            <option value='contract'>Contract</option>
          </select>
          <select
            value={location}
            onChange={handleLocationChange}
            className='p-2 border border-gray-300 rounded-md'
          >
            <option value=''>All Locations</option>
            <option value='nairobi'>Nairobi</option>
            <option value='south africa'>South Africa</option>
            <option value='london'>London</option>
            <option value='Lagos'>Lagos</option>
          </select>
        </div>
      </div>
      <div className='px-4'>
        <div>
          <MyJobs
            searchQuery={searchQuery}
            jobType={jobType}
            location={location}
            currentPage={currentPage}
            jobsPerPage={jobsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default JobSeekerDashboard;
