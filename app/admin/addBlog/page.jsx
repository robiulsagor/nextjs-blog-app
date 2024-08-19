import { UploadIcon } from "lucide-react";

const AddBlogPage = () => {
  return (
    <div className="  px-5 md:px-16 pt-20 ">
      <form className="flex flex-col gap-6 w-full lg:w-[500px]  ">
        <div>
          <span className="text-xl font-medium text-gray-700 block">
            Upload thumbnail
          </span>
          <input type="file" name="image" id="image" hidden />
          <label
            htmlFor="image"
            className="border-dotted border-2 border-gray-200 bg-gray-50  p-2 flex flex-col gap-2 items-center justify-center w-[140px] mt-5 text-gray-500 cursor-pointer hover:bg-gray-200 transition"
          >
            <UploadIcon />
            <span>Upload </span>
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
            className="border p-2 w-full outline-none focus:border-gray-500"
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
            placeholder="Write content here"
            className="border p-2 w-full h-[100px] outline-none focus:border-gray-500"
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
            className="w-[200px] border p-2 focus:border-gray-500 outline-none"
          >
            <option value="Development">Development</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <button className="w-full sm:w-[50%] bg-black text-white px-5 py-2 rounded-md active:translate-y-1 hover:bg-gray-800">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
