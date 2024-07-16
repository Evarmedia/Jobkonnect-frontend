/* eslint-disable no-unused-vars */
import React from "react";
import "ldrs/metronome";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center p-52">
      <l-metronome size='106' speed='2.5' color='blue'></l-metronome>
      <h1 className="text-4xl font-semibold text-blue-700 animate-pulse">Loading...</h1>
    </div>
  );
};

export default Loading;
