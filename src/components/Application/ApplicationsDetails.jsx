import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import EmployerCard from "./EmployerCard";

const ApplicationsDetails = () => {
  const { application_id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", url: "" });
  const [application, setApplication] = useState(null);

  const { getApplicationById } = useContext(ApplicationContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchApplication = async () => {
      if (application_id) {
        try {
          const response = await getApplicationById(application_id);
          // console.log(response);
          setApplication(response);
        } catch (error) {
          console.error("Error fetching application:", error);
        }
      }
    };
    fetchApplication();
  }, [getApplicationById, application_id]);

  const openModal = (title, url) => {
    setModalContent({ title, url });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!application) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      {user.role === "employer" ? (
        <>
          <h2 className='text-2xl font-bold mb-4'>Application Details</h2>
          <div className='bg-white shadow-md rounded p-4'>
            <p>
              <strong>Applicant Name:</strong> {application.name}
            </p>
            <p>
              <strong>Status:</strong> {application.status}
            </p>
            <p>
              <strong>Submitted At:</strong>{" "}
              {new Date(application.submitted_at).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(application.updated_at).toLocaleString()}
            </p>
            <p>
              <strong>Years of Experience:</strong>{" "}
              {application.years_of_experience}
            </p>
            <p>
              <strong>Skills:</strong> {application.skills}
            </p>
            <p>
              <strong>Portfolio:</strong>{" "}
              <a
                href={application.portfolio}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500'
              >
                View Portfolio
              </a>
            </p>
            <p>
              <strong>Resume:</strong>
              <button
                onClick={() => openModal("Resume", application.resume)}
                className='text-blue-500 ml-2'
              >
                Preview
              </button>
            </p>
            <p>
              <strong>Cover Letter:</strong>
              <button
                onClick={() =>
                  openModal("Cover Letter", application.cover_letter)
                }
                className='text-blue-500 ml-2'
              >
                Preview
              </button>
            </p>
          </div>
          {isModalOpen && (
            <div className='fixed inset-0 z-10 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50'>
              <div className='bg-white rounded max-w-md mx-auto p-4'>
                <h3 className='text-xl font-bold'>{modalContent.title}</h3>
                {modalContent.url && (
                  <div className='mt-4'>
                    <iframe
                      src={modalContent.url}
                      className='w-full'
                      style={{ height: "60vh" }}
                      title={modalContent.title}
                    ></iframe>
                  </div>
                )}
                <div className='mt-4 flex justify-end space-x-2'>
                  <a
                    href={modalContent.url}
                    download
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                  >
                    Download
                  </a>
                  <button
                    onClick={closeModal}
                    className='bg-gray-500 text-white px-4 py-2 rounded'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className='text-2xl font-bold mb-4'>Employer Details</h2>
          <EmployerCard employer={user} />
        </>
      )}
    </div>
  );
};

export default ApplicationsDetails;
