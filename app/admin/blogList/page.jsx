"use client";
import axios from "axios";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    const ask = window.confirm("Are you sure to delete?");
    if (!ask) return;

    try {
      const deletedBlog = await axios.delete(`/api/blog/${id}`);
      if (deletedBlog) {
        toast.success("Blog deleted!");
        fetchBlogs();
      }
    } catch (error) {
      toast.error("Operation Failed deleting blog!");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" px-5 sm:px-16 pt-16 pb-10">
      <h1 className="my-5 text-2xl font-medium text-gray-600">Blog List</h1>
      <div className="w-full h-[80vh]  overflow-y-scroll scrollbar-hide">
        {loading ? (
          <div>Loading</div>
        ) : blogs.length > 0 ? (
          <table className="w-full border border-gray-400 rounded-sm text-sm">
            <thead className="text-left bg-gray-100 text-gray-500 font-light">
              <tr className="font-light">
                <th className="py-2 px-4">Author Name</th>
                <th>Title</th>
                <th>Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={i} className="border border-gray-300 text-gray-500">
                  <td className="px-4 flex items-center gap-4 py-3 font-semibold">
                    <Image
                      src={"/author.jpeg"}
                      width={50}
                      height={50}
                      alt="author"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {blog.author}
                  </td>
                  <td>{blog.title}</td>
                  <td>{new Date(blog.date).toDateString()}</td>
                  <td className=" cursor-pointer text-center mx-auto">
                    <X
                      className=" mx-auto"
                      onClick={() => deleteBlog(blog._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No Blog Found</div>
        )}
      </div>
    </div>
  );
}

export default BlogListPage;
