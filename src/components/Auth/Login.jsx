/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../../context/AuthContext";


const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    try {

      if(!email || !password){
        toast.error("Please complete all Fields")
      }
      handleLogin(credentials);
      
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='font-[sans-serif] text-[#333]'>
      {/* <h1 className='font-bold text-3xl text-center'>WELCOME TO JOBKONNECT</h1> */}

      <div className='min-h-screen flex fle-col items-center justify-center py-6 px-4'>
        <div className='grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full'>
          <div className='border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='mb-10'>
                <h3 className='text-3xl font-extrabold'>Sign in</h3>
                <p className='text-sm mt-4'>
                  Sign in to your account and explore a world of possibilities.
                  Your journey begins here.
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm mb-2 block'>Login as</label>
              </div>
              <div>
                <label className='text-sm mb-2 block'>Email</label>
                <div className='relative flex items-center'>
                  <input
                    name='email'
                    type='email'
                    required
                    className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoFocus
                  />
                  <FaUserPlus className='text-xl text-gray-400 absolute right-4' />
                </div>
              </div>
              <div>
                <label className='text-sm mb-2 block'>Password</label>
                <div className='relative flex items-center'>
                  <input
                    name='password'
                    id='password'
                    type='password'
                    required
                    className='w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <FaEyeSlash className='text-xl text-gray-400 absolute right-4 cursor-pointer' />
                </div>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                  />
                  <label htmlFor='remember-me' className='ml-3 block text-sm'>
                    Remember me
                  </label>
                </div>
                <div className='text-sm'>
                  <a href='#' className='text-blue-600 hover:underline'>
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className='!mt-10'>
                {/* <NavLink to='/'> */}
                <button
                  type='submit'
                  className='w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none'
                >
                  Log in
                </button>
                {/* </NavLink> */}
              </div>
              <p className='text-sm !mt-10 text-center'>
                {`Don't have an account?`}{" "}
                <NavLink
                  to='/register'
                  className='text-blue-600 hover:underline ml-1 whitespace-nowrap'
                >
                  Register here
                </NavLink>
              </p>
            </form>
          </div>
          <div className='lg:h-[400px] md:h-[300px] max-md:mt-10'>
            <img
              src='https://readymadeui.com/login-image.webp'
              className='w-full h-full object-cover'
              alt='Best Experience'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
