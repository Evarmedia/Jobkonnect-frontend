/* eslint-disable react/prop-types */
import { IoArrowUndo } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const BackButton = ({destination}) => {
  return (
    <NavLink to={destination}>
      <button className="border border-gray-300 p-1">
        <IoArrowUndo className="text-3xl text-blue-500 hover:scale-110 hover:text-blue-800"/>
      </button>
    </NavLink>
  );
};

export default BackButton;
