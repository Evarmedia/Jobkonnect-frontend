/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { JobContext } from "../../../context/Jobcontext";
import JobCard from "./JobCard";
import Loading from "../Shared/Loading";
import Pagination from "./Pagination";

const MyJobs = ({ searchQuery, jobType, location, currentPage, jobsPerPage, onPageChange }) => {
  const { jobs, employer_jobs } = useContext(JobContext);
  const { role, user } = useContext(AuthContext);

  // Filter jobs based on the search query, job type, and location
  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (jobType === "" || job.job_type === jobType) &&
      (location === "" || job.location?.toLowerCase() === location.toLowerCase())
  );

  const filteredEmployerJobs = employer_jobs?.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (jobType === "" || job.job_type === jobType) &&
      (location === "" || job.location?.toLowerCase() === location.toLowerCase())
  );

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className='pt-2 flex flex-col sm:h-[680px] lg:h-[740px] relative overflow-y-scroll'>
      <section className='flex-grow'>
        {user && role === "job_seeker" ? (
          <div>
            <h1 className='text-center text-2xl font-bold mb-1'>
              ALL AVAILABLE JOBS
            </h1>
            {currentJobs.length > 0 ? (
              <div className="">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                  {currentJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
                <div className="absolute bottom-0 w-full p-2">
                  <Pagination
                    totalJobs={filteredJobs.length}
                    jobsPerPage={jobsPerPage}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
            ) : (
              <div>
                <Loading />
              </div>
            )}
          </div>
        ) : (
          <div className='container'>
            {filteredEmployerJobs?.length > 0 ? (
              <div className="">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                  {filteredEmployerJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ) : (
              <h1 className='text-2xl font-bold mb-5'>
                You Have Not Created any Jobs
              </h1>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyJobs;
