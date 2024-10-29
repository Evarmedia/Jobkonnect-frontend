/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
// const user_id =localStorage.getItem("user_id")

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const { user_id, logout } = useContext(AuthContext);

  const menuItems = [
    { title: "HOME", link: "/" },
    // { title: "APPLICATIONS", link: `my_applications` },
    { title: "DASHBOARD", link: `/dashboard/${user_id}` },
    { title: "ABOUT", link: "/about" },
    { title: "CONTACT", link: "/contact" },
  ];
  
  const handleLogout = () => {
    logout();
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(()=>{}, []);


  return (
    <>
      <header className='sticky top-0 z-50 bg-white shadow-md py-1 px-4 sm:px-10 font-sans  tracking-wide border-gray-400 border-b-2'>
        <div className='flex items-center justify-between h-12'>
          <h1 className='font-extrabold md:text-2xl text-blue-600 text-lg '>
            JobKonnect
          </h1>

          {/* right side, auth buttons */}

          <div className='flex gap-2'>
            {/* lg menu */}
            <div className='flex space-x-3'>
              {user_id ? (
                <>
                  <button
                    className='px-1 py-1 text-xs rounded-2xl font-bold text-white border-2 border-blue-600 bg-blue-600 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-blue-600'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to='/login'>
                    <button className='px-1 py-1 text-xs rounded-2xl font-bold text-white border-2 border-blue-600 bg-blue-600 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-blue-600'>
                      Login
                    </button>
                  </NavLink>
                  <NavLink to='/register'>
                    <button className='px-1 py-1 text-xs rounded-2xl font-bold text-white border-2 border-blue-600 bg-blue-600 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-blue-600'>
                      Sign up
                    </button>
                  </NavLink>
                </>
              )}
            </div>
            {/* hamburger menu */}
            <button
              id='toggleOpen'
              className='lg:hidden flex items-center justify-center focus:outline-none'
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <HiOutlineMenuAlt3 className='text-2xl' />
              ) : (
                <MdClose className='text-2xl' />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
