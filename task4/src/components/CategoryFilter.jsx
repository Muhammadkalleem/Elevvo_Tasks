import React from "react";

const categories = ["All", "Tech", "Travel", "Food"];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div className="flex justify-center gap-3 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1 rounded-full border ${
            category === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border-blue-600"
          }`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
