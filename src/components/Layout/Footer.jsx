/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <footer className={`bg-[#18191c] h-fit py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center ${isAuthorized ? 'block' : 'hidden'}`}>
      <div className="text-sm text-[#f1f3f6]">
        &copy; All Rights Reserved By Tatenda && Mishak.
      </div>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <Link
          to={"https://github.com/Evarmedia"}
          target="_blank"
          className="text-[#f1f3f6] hover:text-[#2d5649] transition-transform transform hover:scale-110"
        >
          <FaFacebookF className="text-2xl" />
        </Link>
        <Link
          to={"https://www.youtube.com/@mosicodes"}
          target="_blank"
          className="text-[#f1f3f6] hover:text-[#2d5649] transition-transform transform hover:scale-110"
        >
          <FaYoutube className="text-2xl" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/mosicodes"}
          target="_blank"
          className="text-[#f1f3f6] hover:text-[#2d5649] transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          to={"https://www.instagram.com/mosicodes/"}
          target="_blank"
          className="text-[#f1f3f6] hover:text-[#2d5649] transition-transform transform hover:scale-110"
        >
          <RiInstagramFill className="text-2xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
