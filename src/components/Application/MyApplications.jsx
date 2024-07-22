import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import ApplicationCard from "./ApplicationCard";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { JobContext } from "../../../context/Jobcontext";
import { NavLink, useNavigate } from "react-router-dom";
import BackButton from "../Shared/BackButton";

const MyApplications = () => {
  const { user, getUserById, isAuthorized } = useContext(AuthContext);
  const { getApplicationbyRole } = useContext(ApplicationContext);
  const { getSingleJob } = useContext(JobContext);

  const [applications, setApplications] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authorized
    if (!isAuthorized) {
      navigate("/login");
      return;
    }

    const manageApplications = async () => {
      try {
        const response = await getApplicationbyRole();
        setApplications(response);

        // Fetch user details based on role
        await handleUserInfo(response);

        // Fetch job details for each application
        await fetchJobDetails(response);
      } catch (error) {
        console.error("Error fetching applications", error);
        toast.error("Error fetching applications");
      }
    };

    const handleUserInfo = async (applications) => {
      const userDetails = {};
      for (const app of applications) {
        let details;
        if (user.role === "job_seeker") {
          details = await getUserById(app.employer_id);
        } else {
          details = await getUserById(app.user_id);
        }
        userDetails[app.id] = details;
      }
      setUserDetails(userDetails);
    };

    const fetchJobDetails = async (applications) => {
      const jobDetails = {};
      for (const app of applications) {
        const job = await getSingleJob(app.job_id);
        jobDetails[app.id] = job;
      }
      setJobDetails(jobDetails);
    };

    manageApplications();
  }, [
    getApplicationbyRole,
    getUserById,
    user.role,
    getSingleJob,
    isAuthorized,
    navigate,
  ]);

  const handleDeleteApplication = (applicationId) => {
    setApplications(applications.filter((app) => app.id !== applicationId));
  };

  const handleUpdateApplication = (updatedApplication) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
  };

  if (!isAuthorized) {
    return null; // Return early if not authorized
  }

  return (
    <section className='h-screen overflow-auto relative sm:p-9'>
      {/* <h1 className="text-center font-bold text-2xl mt-4">APPLICATIONS PAGE</h1> */}
      {user && user.role === "job_seeker" ? (
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {applications.length <= 0 ? (
            <h4 className='text-3xl font-semibold p-5 text-center col-span-5'>
              You have not Applied to any{" "}
              <NavLink to={`/dashboard/${user.id}`}>
                <span className="underline text-blue-700 font-normal">Jobs</span>
              </NavLink>
            </h4>
          ) : (
            applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                userDetails={userDetails[application.id]}
                onDelete={handleDeleteApplication} // Pass the callback function
                onUpdate={handleUpdateApplication} // Pass the update callback function
                job_title={jobDetails[application.id]?.title} // Pass the job title
                job_id={jobDetails[application.id]?.id} // Pass the job id
              />
            ))
          )}
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {applications.length <= 0 ? (
            <h4 className='text-3xl font-semibold p-5 text-center col-span-5'>No Applications Found From JobSeekers</h4>
          ) : (
            applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                userDetails={userDetails[application.id]}
                onDelete={handleDeleteApplication} // Pass the callback function
                onUpdate={handleUpdateApplication} // Pass the update callback function
                job_title={jobDetails[application.id]?.title} // Pass the job title
              />
            ))
          )}
        </div>
      )}

      {user.role === "job_seeker" && (
        <div className='absolute top-3 left-4'>
          <BackButton />
        </div>
      )}
    </section>
  );
};

export default MyApplications;
