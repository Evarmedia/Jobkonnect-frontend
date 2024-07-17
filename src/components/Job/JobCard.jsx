/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { JobContext } from "../../../context/Jobcontext";
import ConfirmDelete from "../Shared/ConfirmDelete";
import { AuthContext } from "../../../context/AuthContext";

const JobCard = ({ job }) => {
  const { deleteJob } = useContext(JobContext);
  const { role } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteJob = async () => {
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    await deleteJob(job.id);
    setShowPopup(false);
  };

  const cancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <div className='relative max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700'>
      <div className="h-4/5">
        <NavLink to={`/jobdetails/${job.id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
            {job.title}
          </h5>
        </NavLink>
        <p className='text-gray-400 capitalize'>{job.job_type}</p>
        <div className="overflow-hidden">
          <p className='mb-3 font-normal text-gray-400'>
            {job.description}...
          </p>
        </div>
      </div>

      <div className="flex justify-between ">
        <button>
          <NavLink
            to={`/jobdetails/${job.id}`}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Job Details
            <HiArrowLongRight className='ms-2' />
          </NavLink>
        </button>
        {role === "job_seeker" && (
          <button>
            <Link
              to={`/applications_form/${job.id}`}
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Apply
              <HiArrowLongRight className='ms-2' />
            </Link>
          </button>
        )}
      </div>

      {role === "employer" && (
        <button onClick={handleDeleteJob}>
          <IoTrashBin
            title='Delete Job'
            className='absolute z-2 text-2xl text-white top-2 right-2 rounded-full bg-red-500 hover:bg-red-900'
          />
        </button>
      )}

      {showPopup && (
        <ConfirmDelete
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default JobCard;
