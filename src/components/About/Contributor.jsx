/* eslint-disable react/prop-types */
// import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contributor = ({
  imgSrc,
  name,
  description,
  linkedin,
  github,
  twitter,
}) => {
  return (
    <div className='shadow-md flex items-center mb-6 py-4 px-4 rounded-md shadow-gray-300 w-full sm:w-[290px]'>
      <img src={imgSrc} alt={name} className='w-16 h-16 rounded-full mr-4' />
      <div>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-gray-700'>{description}</p>
        <div className='mt-2 flex gap-3'>
          <a
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <FaLinkedin />
          </a>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='mr-2'
          >
            <FaGithub />
          </a>
          <a href={twitter} target='_blank' rel='noopener noreferrer'>
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
