import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-center mt-8 gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`w-8 h-8 rounded-full border text-sm ${
            currentPage === i + 1
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border-blue-600"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
