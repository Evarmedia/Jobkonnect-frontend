/* eslint-disable react/prop-types */
import { useState } from "react";

const Pagination = ({ totalJobs, jobsPerPage, currentPage, onPageChange }) => {
    const [visiblePages, setVisiblePages] = useState({ start: 1, end: 2 });
    
    const totalPages = Math.ceil(totalJobs / jobsPerPage);
  
    const updatePageRange = (direction) => {
      setVisiblePages((prev) => {
        let newStart = prev.start;
        let newEnd = prev.end;
  
        if (direction === "next" && newEnd < totalPages) {
          newStart = Math.min(newEnd + 1, totalPages - 1);
          newEnd = Math.min(newStart + 1, totalPages);
        } else if (direction === "prev" && newStart > 1) {
          newEnd = Math.max(newStart - 1, 2);
          newStart = Math.max(newEnd - 1, 1);
        }
  
        return { start: newStart, end: newEnd };
      });
    };
  
    return (
      <div className='flex items-center justify-center mt-4'>
        <button
          onClick={() => updatePageRange("prev")}
          disabled={visiblePages.start === 1}
          className='px-3 py-1 mx-1 border bg-white text-blue-500 rounded-full hover:bg-blue-500 hover:text-white'
        >
          &lt;
        </button>
  
        {Array.from({ length: visiblePages.end - visiblePages.start + 1 }, (_, index) => visiblePages.start + index).map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 mx-1 border ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-full hover:bg-blue-500 hover:text-white`}
          >
            {number}
          </button>
        ))}
  
        <button
          onClick={() => updatePageRange("next")}
          disabled={visiblePages.end === totalPages}
          className='px-3 py-1 mx-1 border bg-white text-blue-500 rounded-full hover:bg-blue-500 hover:text-white'
        >
          &gt;
        </button>
      </div>
    );
  };

export default Pagination;