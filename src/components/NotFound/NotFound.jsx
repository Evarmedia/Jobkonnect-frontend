import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <section className="min-h-[750px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/notfound.png" alt="notfound" />
          <Link
            to="/"
            className="text-lg font-medium py-1.5 px-7 border border-[#184235] text-[#184235] bg-transparent hover:bg-[#184235] hover:text-[#f1f3f6] transition-all duration-300"
          >
            RETURN TO HOME PAGE
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
