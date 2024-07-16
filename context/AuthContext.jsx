import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({
  isAuthorized: false,
  handleLogin: () => {},
  handleRegister: () => {},
  logout: () => {},
  user_id: null,
  getUserById: () => {},
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [role, setRole] = useState("");
  const [user_id, setUser_id] = useState(null);
  const [user, setUser] = useState({});
  const [initialLoad, setInitialLoad] = useState(true); // Add state to handle initial load

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    const storedRole = localStorage.getItem("role");
    const storedUser = localStorage.getItem("user");

    if (storedUserId && storedRole && storedUser) {
      setIsAuthorized(true);
      setUser_id(storedUserId);
      setRole(storedRole);
      setUser(JSON.parse(storedUser)); // Parse the stored user object

      if (initialLoad) {
        navigate(`/dashboard/${storedUserId}`);
        setInitialLoad(false);
      }
    } else {
      setInitialLoad(false);
    }
  }, [navigate, initialLoad ]);

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
      const user = response.data.user;
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", user.id);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);
  
      setUser(user);
      setRole(user.role); // note remove sub states and use only user later
      setUser_id(user.id);
      setIsAuthorized(true);
      navigate(`/dashboard/${user.id}`);
      toast.success(`WELCOME ${user.username.toUpperCase()}`);
    } catch (error) {
      console.warn(error.response.data.error);
      toast.warn(error.response.data.error);
    }
  };

  // manage Register
  const handleRegister = async (data) => {
    try {
      console.log("Sending data", data);
      const response = await axios.post(
        `http://localhost:5000/api/user/register`,
        data
      );

      console.log("Registration successful:", response.data);
      // After successful registration, you might want to automatically log in the user
      toast.success(response.data.message);
      handleLogin({ email: data.email, password: data.password });
    } catch (error) {
      console.error(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const getUserById = async (user_id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${user_id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // manage logout
  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
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
        user,
        getUserById
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
