/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";


export const JobContext = createContext({
  getSingleJob:  () =>  {},
});

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [employer_jobs, setEmployer_jobs] = useState([]);

  const { user_id, isAuthorized } = useContext(AuthContext);
  const token = localStorage.getItem('token'); //NB:needed for headers later
  

useEffect(() => {
  if (!user_id || !isAuthorized) {
    return;
  }
    const getAllJobs = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/jobs`);
            setJobs(response.data);
        } catch (error) {
            console.log(error);
        }
      };
      getAllJobs();

      const getJobByEmployer = async () => {
        try {
          const response = await axios.get(`http://localhost:5000//api/jobs/employer/${user_id}`);
          // console.log(response.data[0]);
          setEmployer_jobs(response.data)
        } catch (error) {
          console.log(error);
        }
      };
      getJobByEmployer();
}, [user_id]);

const getSingleJob = async (job_id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/jobs/${job_id}`);
    console.log(response );

  } catch (error) {
    console.log(error);
  }
};

const deleteJob = async (job_id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/jobs/${job_id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


  

  return (
    <JobContext.Provider value={{ jobs, employer_jobs, getSingleJob }}>
      {children}
    </JobContext.Provider>
  );
};