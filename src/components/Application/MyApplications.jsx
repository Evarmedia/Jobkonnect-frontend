/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { AuthContext } from "../../../context/AuthContext";
import ResumeModal from "./ResumeModal";
import ApplicationCard from "./ApplicationCard";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { JobContext } from "../../../context/Jobcontext";

const MyApplications = () => {
  const { user, getUserById } = useContext(AuthContext);
  const { getApplicationbyRole, } = useContext(ApplicationContext);
  const { getSingleJob } = useContext(JobContext)

  const [applications, setApplications] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const manageApplications = async () => {
      try {
        const response = await getApplicationbyRole();
        setApplications(response);

        // Fetch user details based on role
        await handleUserInfo(response);

        // Fetch job details for each application
        await fetchJobDetails(response);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error(error.message || "Error fetching applications");
      }
    };

    const handleUserInfo = async (applications) => {
      const userDetails = {};
      for (const app of applications) {
        let details;
        if (user.role === 'job_seeker') {
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
  }, [getApplicationbyRole, getUserById, user.role, getSingleJob]);

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteApplication = (applicationId) => {
    setApplications(applications.filter(app => app.id !== applicationId));
  };

  const handleUpdateApplication = (updatedApplication) => {
    setApplications(prevApplications =>
      prevApplications.map(app =>
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
  };

  return (
    <section className="h-screen overflow-auto">
      <h1 className="text-center font-bold text-2xl mt-4">APPLICATIONS PAGE</h1>
      {user && user.role === "job_seeker" ? (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {applications.length <= 0 ? (
            <h4>No Applications Were Found</h4>
          ) : (
            applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                userDetails={userDetails[application.id]}
                openModal={openModal}
                onDelete={handleDeleteApplication} // Pass the callback function
                onUpdate={handleUpdateApplication} // Pass the update callback function
                job_title={jobDetails[application.id]?.title} // Pass the job title
                job_id ={jobDetails[application.id]?.id} // Pass the job id
              />
            ))
          )}
        </div>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">          
          {applications.length <= 0 ? (
            <h4>No Applications Found From JobSeekers</h4>
          ) : (
            applications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
                userDetails={userDetails[application.id]}
                openModal={openModal}
                onDelete={handleDeleteApplication} // Pass the callback function
                onUpdate={handleUpdateApplication} // Pass the update callback function
                job_title={jobDetails[application.id]?.title} // Pass the job title
              />
            ))
          )}
        </div>
      )}
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;
