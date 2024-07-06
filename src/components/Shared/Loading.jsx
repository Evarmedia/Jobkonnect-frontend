/* eslint-disable no-unused-vars */
import React from "react";
import "ldrs/metronome";

const Loading = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-screen">
      <l-metronome size='106' speed='1.6' color='blue'></l-metronome>
      <h1 className="text-3xl font-semibold text-blue-700 animate-pulse">Loading...</h1>
    </div>
  );
};

export default Loading;
