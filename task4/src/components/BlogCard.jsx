import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{post.date}</p>
        <p className="text-gray-700">{post.description}</p>
        <span className="inline-block mt-3 text-xs text-white bg-blue-500 px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
