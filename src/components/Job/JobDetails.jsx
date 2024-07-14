import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../../../context/Jobcontext";
import Loading from "../Shared/Loading";

const JobDetails = () => {
  const { job_id } = useParams();
  
  const [job, setJob] = useState({});
  
  const { getSingleJob } = useContext(JobContext)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobDetails = await getSingleJob(job_id);
        setJob(jobDetails);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJob();
  }, [job_id, getSingleJob]);

  if (!job) {
    return <div><Loading /></div>;
  }
  // console.log(job);
  return (
    <div className="m-10 max-w-3xl p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      <h1 className="text-3xl capitalize text-gray-300  font-bold mb-4"><span className="text-white font-semibold">Job title:</span> {job.title} </h1>
      <p className="text-gray-400"><span className="text-white font-semibold">Job Type:</span> {job.job_type}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-white font-semibold">Description:</span> {job.description}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-white font-semibold">Application Deadline:</span> {job.requirements}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-white font-semibold">Location:</span> {job.location}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="text-white font-semibold">Application Deadline:</span> {job.application_deadline}</p>
      
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
