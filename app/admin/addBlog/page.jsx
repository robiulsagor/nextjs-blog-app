"use client";
import axios from "axios";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBlogPage = () => {
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    author: "Robiul Islam Sagar",
    author_img: "/author.jpeg",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("author_img", data.author_img);

      await axios.post("/api/blog", formData);
      toast.success("Blog created successfully");

      // clear all fields
      setData({
        title: "",
        description: "",
        category: "",
        author: "Robiul Islam Sagar",
        author_img: "http://localhost:3000/19.jpeg",
      });
      setImage(null);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="px-5 md:px-16 pt-20 pb-10">
      <form
        className="flex flex-col gap-6 w-full lg:w-[500px]"
        onSubmit={handleSubmit}
      >
        <div>
          <span className="text-xl font-medium text-gray-700 block">
            Upload thumbnail
          </span>
          <input
            type="file"
            name="image"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label
            htmlFor="image"
            className="border-dotted border-2 border-gray-200 bg-gray-50  p-2 flex flex-col gap-2 items-center justify-center w-[140px] mt-5 text-gray-500 cursor-pointer hover:bg-gray-200 transition"
          >
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt="img"
                width="130"
                height={50}
              />
            ) : (
              <>
                {" "}
                <UploadIcon />
                <span>Upload </span>
              </>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="title"
            className=" mb-5 text-xl font-medium text-gray-700 block"
          >
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Type here"
            value={data.title}
            onChange={handleChange}
            className="border p-2 w-full outline-none focus:border-gray-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className=" mb-5 text-xl font-medium text-gray-700 block"
          >
            Blog Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Write content here"
            className="border p-2 w-full h-[100px] outline-none focus:border-gray-500"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="category"
            className=" mb-5 text-xl font-medium text-gray-700 block"
          >
            Category
          </label>

          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={data.category}
            className="w-[200px] border p-2 focus:border-gray-500 outline-none"
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Development">Development</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full sm:w-[50%] bg-black text-white px-5 py-2 rounded-md active:translate-y-1 hover:bg-gray-800"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
