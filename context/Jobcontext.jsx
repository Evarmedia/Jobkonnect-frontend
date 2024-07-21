/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
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
  const token = localStorage.getItem("token");

  const deployedUrl = `https://tatenda1998.pythonanywhere.com/`;


  useEffect(() => {
    const fetchJobs = async () => {
      if (!user_id || !isAuthorized) {
        return;
      }
      try {
        if (role === "job_seeker") {
          const response = await axios.get(`${deployedUrl}/api/jobs`);
          setJobs(response.data);
        } else {
          const response = await axios.get(`${deployedUrl}/api/jobs/employer/${user_id}`);
          setEmployer_jobs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, [user_id, isAuthorized, role]);

  const createJob = async (data) => {
    try {
      const jobData = { ...data, employer_id: user_id };
      const response = await axios.post(
        `${deployedUrl}/api/jobs`,
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Job created successfully");
      setEmployer_jobs((prevJobs) => [...prevJobs, response.data]);
      return response.data;
    } catch (error) {
      console.error("Error creating job:", error);
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred while creating the job.");
      }
    }
  };

  const getSingleJob = async (job_id) => {
    try {
      const response = await axios.get(
        `${deployedUrl}/api/jobs/${job_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (job_id) => {
    try {
      const response = await axios.delete(
        `${deployedUrl}/api/jobs/${job_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== job_id));
      setEmployer_jobs((prevEmployerJobs) =>
        prevEmployerJobs.filter((job) => job.id !== job_id)
      );
      return response.data.message;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
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
