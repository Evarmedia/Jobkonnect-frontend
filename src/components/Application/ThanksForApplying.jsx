/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const ThanksForApplying = () => {
  return (
    <div>
      <h1>ThanksForApplying</h1>
      <NavLink to={`my_applications`}>
        <p>Go back</p>
      </NavLink>
    </div>
  );
};

export default ThanksForApplying;
