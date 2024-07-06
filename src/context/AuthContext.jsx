/* eslint-disable no-unused-vars */
// AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({
  isAuthorized: false,
  handleLogin: () => {},
  handleRegister: () => {},
  logout: () => {},
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [role, setRole] = useState("");
  const [user_id, setUser_id] = useState(null);

  const [initialLoad, setInitialLoad] = useState(true); // Add state to handle initial load

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    const storedRole = localStorage.getItem("role");
    if (storedUserId && storedRole) {
      setIsAuthorized(true);
      setUser_id(storedUserId);
      if (initialLoad) { // Only navigate on initial load
        // if (storedRole === "employer") {
        //   navigate(`/employer_dash/${storedUserId}`);
        // } else {
        //   navigate(`/jobseeker_dash/${storedUserId}`);
        // }
        navigate(`/dashboard/${storedUserId}`)
        setInitialLoad(false); // Set initialLoad to false after navigation
      }
    } else {
      setInitialLoad(false); // If no user data, set initialLoad to false
    }
  }, [navigate, initialLoad]); // Add initialLoad to the dependency array

  // manage Login
  const handleLogin = async (credentials) => {
    setIsAuthorized(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("role", response.data.role);

      setRole(response.data.role);
      setUser_id(response.data.user_id);
      setIsAuthorized(true);

      // if (response.data.role === "employer") {
      //   navigate(`/employer_dash/${response.data.user_id}`);
      // } else {
      //   navigate(`/jobseeker_dash/${response.data.user_id}`);
      // }
      navigate(`/dashboard/${response.data.user_id}`)
    } catch (error) {
      console.warn(error.response.data.message);
      toast.warn(error.response.data.message);
    }
  };

  //  manage Register
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        data
      );

      console.log("Registration successful:", response.data);

      // After successful registration, you might want to automatically log in the user
      // For simplicity, you can call handleLogin to perform the login after registration
      handleLogin({ email: data.email, password: data.password });
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  // manage logout
  const logout = async () => {
    try {
      // const tokenExpiry = localStorage.getItem("tokenExpiry");

      // if (tokenExpiry && Date.now() > tokenExpiry) {
      //   console.log("Token has expired, logging out");
      // }

      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("role");
      // localStorage.removeItem("tokenExpiry");
      setIsAuthorized(false);
      setUser_id(null);
      setRole(null);

      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        user_id,
        setIsAuthorized,
        handleLogin,
        handleRegister,
        logout,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
