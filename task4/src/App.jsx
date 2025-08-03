import React, { useState } from "react";
import { blogPosts } from "./data/blogPosts";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Pagination from "./components/Pagination";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (

    <div> 

   

    <div className="min-h-screen px-4 py-6 md:px-12 lg:px-32 bg-gray-100 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">My Personal Blog</h1>
        <p className="text-lg text-gray-600">Thoughts, stories, and travel logs</p>
      </header>

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-center col-span-full">No posts found.</p>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>

    </div>
  );
};

export default App;
