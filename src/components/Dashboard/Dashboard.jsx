/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Loading from "../Shared/Loading";
import EmployerDashboard from "./EmployerDashboard";
import JobSeekerDashboard from "./JobSeekerDashboard";

const Dashboard = () => {
  const { isAuthorized, user_id } = useContext(AuthContext);
  const navigate = useNavigate()

  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);

    if (!isAuthorized || !user_id) {
      navigate("/login"); // Navigate to login route
    }

  }, [isAuthorized, navigate, user_id]);

  if (!isAuthorized || !user_id) {
    return null;
  }

  if (role === "employer") {
    return <EmployerDashboard />;
  }

  if (role === "job_seeker") {
    return <JobSeekerDashboard />;
  }

  return <div>
    <Loading />
  </div>;
};

export default Dashboard;
