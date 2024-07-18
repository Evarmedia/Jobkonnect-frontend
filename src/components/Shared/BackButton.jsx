/* eslint-disable react/prop-types */
import { IoArrowUndo } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous route
  };
  return (
    <NavLink>
      <button className="border border-gray-300 p-1">
        <IoArrowUndo className="text-lg sm:text-3xl text-blue-500 hover:scale-110 hover:text-blue-800"
         onClick={goBack}/>
      </button>
    </NavLink>
  );
};

export default BackButton;
