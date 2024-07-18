/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaEyeSlash, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";

const Register = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const { handleRegister } = useContext(AuthContext);

  const handleRoleChange = async (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    // Reset fields when role changes
    if (selectedRole === "employer") {
      setFirstName("");
      setLastName("");
    } else if (selectedRole === "job_seeker") {
      setCompany("");
      setWebsite("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      role, 
      email,
      password,
      username,
      first_name: firstname,
      last_name: lastname,
      company_name: company,
      website,
      address,
      phone_number: phone,
    };
    try {
      if(!email || !role || !password) {
        toast.error("Role, Email, and Password are required fields")
      }
      if(role === "employer"){
        if(!website || !company){
          toast.error("Please add a website and company name to continue");
        }
      }
      handleRegister(data);
    } catch (error) {
      console.error(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <div className="font-sans text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center py-2 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-5">
                <h3 className="text-3xl font-extrabold">Create a new account</h3>
                {/* <p className="text-sm mt-4">
                  Create your account and explore a world of possibilities. Your
                  journey begins here.
                </p> */}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm mb-1 block">Register as</label>
                <div className="relative bg-gray-100 p-2 pr-4 flex items-center rounded-lg">
                  <select
                    className="bg-inherit p-2 border-0 w-full h-full focus:outline-none"
                    value={role}
                    onChange={handleRoleChange}
                  >
                    <option value="">Select Role</option>
                    <option value="employer">Employer</option>
                    <option value="job_seeker">Job Seeker</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">Email Address</label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MdOutlineMailOutline className="text-xl text-gray-400 absolute right-4" />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaEyeSlash className="text-xl text-gray-400 absolute right-4 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Enter preferred user name"
                    className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                </div>
              </div>

              {role === "employer" && (
                <>
                  <div>
                    <label className="text-sm mb-1 block">Company</label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Enter company name"
                        className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                      <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">Company Website</label>
                    <div className="relative flex items-center">
                      <input
                        type="url"
                        placeholder="Enter company website"
                        className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                      <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                    </div>
                  </div>
                </>
              )}

              {role === "job_seeker" && (
                <>
                  <div>
                    <label className="text-sm mb-1 block">First Name</label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">Last Name</label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="text-sm mb-1 block">Phone Number</label>
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full text-sm border border-gray-300 px-4 py-2 rounded-md outline-[#333]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <FaPencilAlt className="text-xl text-gray-400 absolute right-4" />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms-condition"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                <label htmlFor="terms-condition" className="ml-3 block text-sm">
                  I accept the{" "}
                  <span className="hover:underline text-blue-600">terms and conditions</span>
                </label>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                  disabled={!termsAccepted} // Disable button if terms not accepted
                >
                  Sign Up
                </button>
              </div>

              <p className="text-sm mt-6 text-center">
                Already have an account?{" "}
                <NavLink to="/login" className="text-blue-600 hover:underline ml-1">
                  Login here
                </NavLink>
              </p>
            </form>
          </div>

          <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full object-cover"
              alt="Signin Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
