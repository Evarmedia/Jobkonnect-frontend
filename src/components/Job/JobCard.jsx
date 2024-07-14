/* eslint-disable react/prop-types */
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white">
          {job.title}
        </h5>
      </a>
      <p className="text-gray-400 capitalize">{job.job_type}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {job.description}
      </p>

      <Link
        to={`/jobdetails/${job.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Job Details
        <HiArrowLongRight className="ms-2" />
      </Link>
    </div>
  );
};

export default JobCard;
