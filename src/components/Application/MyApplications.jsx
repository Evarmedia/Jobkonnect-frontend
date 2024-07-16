/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../../context/AuthContext";
import ResumeModal from "./ResumeModal";
import ApplicationCard from "./ApplicationCard";
import { ApplicationContext } from "../../../context/ApplicationContext";

const MyApplications = () => {
  const { user, getUserById } = useContext(AuthContext);
  const { getApplicationbyRole } = useContext(ApplicationContext);

  const [applications, setApplications] = useState([]);
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

    manageApplications();
  }, [getApplicationbyRole, getUserById, user.role]);

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
    <section className="my_applications page">
      {user && user.role === "job_seeker" ? (
        <div className="container">
          <h1>My Applications</h1>
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
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <h1>Applications Page</h1>
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




const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element.name}
        </p>
        <p>
          <span>Email:</span> {element.email}
        </p>
        <p>
          <span>Phone:</span> {element.phone}
        </p>
        <p>
          <span>Address:</span> {element.address}
        </p>
        <p>
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      <div className="btn_area">
        <button onClick={() => deleteApplication(element._id)}>
          Delete Application
        </button>
      </div>
    </div>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element.name}
        </p>
        <p>
          <span>Email:</span> {element.email}
        </p>
        <p>
          <span>Phone:</span> {element.phone}
        </p>
        <p>
          <span>Address:</span> {element.address}
        </p>
        <p>
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
    </div>
  );
};
