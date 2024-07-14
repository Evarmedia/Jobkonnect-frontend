import axios from "axios";
import { createContext, useEffect, useState } from "react";
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
  }, [navigate, initialLoad]);

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
      localStorage.setItem("user_id", response.data.user.id);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("role", response.data.user.role);

      // console.log(response.data.user);
      setUser(response.data.user);
      setRole(response.data.user.role); // note remove sub states and use only user later
      setUser_id(response.data.user.id);
      setIsAuthorized(true);
      navigate(`/dashboard/${response.data.user.id}`);
    } catch (error) {
      console.warn(error.response.data.message);
      toast.warn(error.response.data.message);
    }
  };

  // manage Register
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/user/register`,
        data
      );

      console.log("Registration successful:", response.data);
      // After successful registration, you might want to automatically log in the user
      handleLogin({ email: data.email, password: data.password });
    } catch (error) {
      console.error(error.response.data.message);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
