import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search blog posts..."
        className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
