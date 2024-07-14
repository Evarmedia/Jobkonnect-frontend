import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { JobContext } from "../../../context/Jobcontext";
import JobCard from "./JobCard";
import Loading from "../Shared/Loading";

const MyJobs = () => {
  const { jobs, employer_jobs } = useContext(JobContext);
  
  const { role, user } = useContext(AuthContext);
  

  return (
    <div className='pt-5'>
      <section className='my_applications page'>
        {user && role === "job_seeker" ? (
          <div >
        <h1 className="text-center text-2xl font-bold mb-5">ALL AVAILABLE JOBS</h1>
        {jobs.length > 0 ? (
              <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div><Loading /></div>
              </div>
            )}
          </div>
        ) : (
          <div className='container'>
            {employer_jobs.length > 0 ? (
              <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                  {employer_jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <h1 className="text-2xl font-bold mb-5">You Have Not Created any Jobs
              </h1>

              
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyJobs;
// JobDetails
