/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ApplicationContext } from "../../../context/ApplicationContext";
import ConfirmDelete from "../Shared/ConfirmDelete";
import { AuthContext } from "../../../context/AuthContext";

const ApplicationCard = ({ application, job_id, job_title, onDelete, onUpdate }) => {
  const { deleteApplication, getApplicationById, updateApplicationStatus } =
    useContext(ApplicationContext);
  const { role } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState(application.status);

  const handleDeleteApplication = async () => {
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    await deleteApplication(application.id);
    setShowPopup(false);
    onDelete(application.id); // Call the callback function
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    const updatedApplication = await updateApplicationStatus(application.id, newStatus);
    onUpdate(updatedApplication); // Call the onUpdate callback with the updated application data
    setStatus(newStatus);
  };

  const cancel = () => {
    setShowStatus(false);
    setShowPopup(false);
  };

  const handleShowStatus = async () => {
    setShowStatus(true);
    await getApplicationById(application.id);
  };

  // Determine the status color class
  const getStatusColorClass = (status) => {
    switch (status) {
      case 'submitted':
        return 'text-green-600';
      case 'under_review':
        return 'text-yellow-600';
      case 'accepted':
        return 'text-green-800';
      case 'rejected':
        return 'text-red-600';
      default:
        return '';
    }
  };

  return (
    <div className='relative max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700'>
      <div className='h-4/5'>
        <NavLink to={`/jobdetails/${job_id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
            {job_title}
          </h5>
        </NavLink>
        <p className={`text-gray-200 capitalize`}>Status: <span className={`${getStatusColorClass(status)}`}>{status}</span></p>
      </div>

      <div className='flex justify-between '>
        <button>
          <NavLink
            to={`/applicationdetails/${application.id}`}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            more info..
            <HiArrowLongRight className='ms-2' />
          </NavLink>
        </button>
        {role === "job_seeker" ? (
          <button
            onClick={handleShowStatus}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Check status
            <HiArrowLongRight className='ms-2' />
          </button>
        ) : (
          <div>
            <button
              onClick={handleShowStatus}
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Update Status
              <HiArrowLongRight className='ms-2' />
            </button>
          </div>
        )}
      </div>

      {role === "employer" && (
        <button onClick={handleDeleteApplication}>
          <IoTrashBin
            title='Delete application'
            className='absolute z-2 text-2xl text-white top-2 right-2 rounded-full bg-red-500 hover:bg-red-900'
          />
        </button>
      )}

      {showPopup && (
        <ConfirmDelete confirmDelete={confirmDelete} cancelDelete={cancel} />
      )}

      {showStatus && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          {role === "employer" ? (
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h1 className='font-semibold text-2xl'>
                Update Application Status?
              </h1>
              <p className='mb-4'>Check Status Of your Application</p>
                {/* dropdown */}
              <div className="mb-5 p-4">
                <label
                  htmlFor='status'
                  className='block text-sm font-medium text-gray-900'
                >
                  {" "}
                  Update Status{" "}
                </label>
                <select
                  name='status'
                  id='status'
                  value={status}
                  onChange={handleStatusChange}
                  className='p-2 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm'
                >
                  <option value=''>Please Select</option>
                  <option value='submitted'>Submitted</option>
                  <option value='under_review'>Under Review</option>
                  <option value='accepted'>Accepted</option>
                  <option value='rejected'>Rejected</option>
                </select>
              </div>

              <div className='flex justify-around gap-10'>
                <button
                  onClick={cancel}
                  className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h1 className='font-semibold text-2xl mb-4'>
                Status Of your Application
              </h1>
              <p className={`mb-4 capitalize font-semibold text-lg `}>Status: <span className={`${getStatusColorClass(status)}`}>{status}</span></p>
              <div className='flex justify-around gap-10'>
                <button
                  onClick={cancel}
                  className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
