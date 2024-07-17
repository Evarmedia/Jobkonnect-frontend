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
    { title: "JOBS", link: `/dashboard/${user_id}` },
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
      <header className='sticky top-0 z-50 bg-white shadow-md py-4 px-4 sm:px-10 font-sans  tracking-wide border-gray-400 border-b-2'>
        <div className='flex items-center justify-between'>
          <h1 className='font-extrabold md:text-2xl text-blue-600 text-lg'>
            JobKonnect
          </h1>

          {/* sm menu */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex absolute top-full px-4 right-0 bg-white lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:items-center lg:space-x-0 lg:space-y-0 lg:gap-x-5 lg:gap-y-0 z-50`}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className='hover:text-blue-600 text-base font-semibold block hover:bg-blue-300 hover:rounded-full hover:p-1'
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

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
