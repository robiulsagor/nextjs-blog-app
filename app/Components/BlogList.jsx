"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlogItem from "./BlogItem";
import Loading from "./Loading";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/blog");
      const data = await res.data;
      if (data) {
        setBlogs(data);
      } else {
        setBlogs([]);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong fetching blogs!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-6 overflow-scroll sm:overflow-hidden my-10 text-xs sm:text-sm md:text-base">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "px-4 py-1 rounded-sm bg-black text-white" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("CSS")}
          className={
            menu === "CSS" ? "px-4 py-1 rounded-sm bg-black text-white" : ""
          }
        >
          CSS
        </button>
        <button
          onClick={() => setMenu("JavaScript")}
          className={
            menu === "JavaScript"
              ? "px-4 py-1 rounded-sm bg-black text-white"
              : ""
          }
        >
          JavaScript
        </button>
        <button
          onClick={() => setMenu("React")}
          className={
            menu === "React" ? "px-4 py-1 rounded-sm bg-black text-white" : ""
          }
        >
          ReactJS
        </button>
        <button
          onClick={() => setMenu("Development")}
          className={
            menu === "Development"
              ? "px-4 py-1 rounded-sm bg-black text-white"
              : ""
          }
        >
          Development
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {loading ? (
          <Loading />
        ) : blogs.length > 0 ? (
          blogs
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
              />
            ))
        ) : (
          <div>No blogs found</div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
