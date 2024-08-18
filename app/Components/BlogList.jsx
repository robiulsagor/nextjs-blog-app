import { blogData } from "../Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-6 overflow-scroll sm:overflow-hidden my-10 text-xs sm:text-sm md:text-base">
        <button className="px-4 py-1 rounded-sm bg-black text-white">
          All
        </button>
        <button>CSS</button>
        <button>JavaScript</button>
        <button>ReactJS</button>
        <button>Development</button>
      </div>

      <div className="flex flex-wrap justify-around gap-5 gap-y-10 mb-16 xl:mx-24">
        {blogData.map((item, index) => (
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
