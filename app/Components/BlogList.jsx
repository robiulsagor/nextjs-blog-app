"use client";

import { useState } from "react";
import { blogData } from "../Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

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
          onClick={() => setMenu("ReactJS")}
          className={
            menu === "ReactJS" ? "px-4 py-1 rounded-sm bg-black text-white" : ""
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

      <div className="flex flex-wrap justify-around gap-5 gap-y-10 mb-16 xl:mx-24">
        {blogData
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
