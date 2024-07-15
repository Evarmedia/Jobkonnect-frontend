/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const JobContext = createContext({
  getSingleJob: () => {},
  deleteJob: () => {},
  createJob: () => {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const [employer_jobs, setEmployer_jobs] = useState([]);

  const { user_id, isAuthorized, role } = useContext(AuthContext);
  const token = localStorage.getItem("token"); //NB:needed for headers later

  useEffect(() => {
    if (!user_id || !isAuthorized) {
      return;
    }
    if (role === "job_seeker") {
      const getAllJobs = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/jobs`);
          setJobs(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllJobs();
    } else {
      const getJobByEmployer = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000//api/jobs/employer/${user_id}`
          );
          // console.log(response.data[0]);
          setEmployer_jobs(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getJobByEmployer();
    }

  }, [user_id, isAuthorized,role]);



  const createJob = async (data) => {
    try {
      const jobData = { ...data, employer_id: user_id };
      // console.log("Sending job data:", jobData);
  
      const response = await axios.post(
        `http://localhost:5000/api/jobs`,
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Job created successfully:", response.data);
      toast.success("Job created successfully");
      setEmployer_jobs((prevJobs) => [...prevJobs, response.data]);
      return response.data;
    } catch (error) {
      console.error("Error creating job:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        toast.error(error.response.data.error);
      } else {
        console.error("Request error:", error.message);
        toast.error("An error occurred while creating the job.");
      }
    }
  };
  
  const getSingleJob = async (job_id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/jobs/${job_id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (job_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/jobs/${job_id}`
      );

      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== job_id));
      setEmployer_jobs((prevEmployerJobs) =>
        prevEmployerJobs.filter((job) => job.id !== job_id)
      );

      return response.data.message;
    } catch (error) {
      // console.error(error.response.data.error);
      console.error(error);
      toast.error(error.response.data.error)
    }
  };

  return (
    <JobContext.Provider
      value={{ jobs, employer_jobs, createJob, getSingleJob, deleteJob }}
    >
      {children}
    </JobContext.Provider>
  );
};
