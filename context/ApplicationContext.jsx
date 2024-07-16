/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const ApplicationContext = createContext({
  createApplication: () => {},
  getApplicationbyRole: () => {},
  getApplicationById: () => {},
  updateApplicationStatus: () => {},
  deleteApplication: () => {},
});

export const ApplicationProvider = ({ children }) => {
  // const [applications, setApplications] = useState([]);
  // const [employer_applications, setEmployer_applications] = useState([]);

  const { user_id, isAuthorized, role } = useContext(AuthContext);
  const token = localStorage.getItem("token"); //NB:needed for headers later
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_id || !isAuthorized) return;
  }, [user_id, isAuthorized, role]);

  const createApplication = async (job_id, data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/jobs/${job_id}/apply`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Application created successfully", response.data);
      toast.success("Application created successfully");
      setTimeout(() => {
        navigate(`/dashboard/${user_id}`);
      }, 1500);
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
    }
  };

  const getApplicationbyRole = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/applications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getApplicationById = async (applicaion_id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/application/${applicaion_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateApplicationStatus = async (application_id, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/application/${application_id}`, 
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Application Updated Successfully");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Failed to update application");
    }
  };

  const deleteApplication = async (applicaion_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/application/${applicaion_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        createApplication,
        getApplicationById,
        getApplicationbyRole,
        updateApplicationStatus,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
