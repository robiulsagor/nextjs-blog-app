import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ id, title, description, image, category }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="abc"
          width={400}
          height={200}
          className="border-b border-black h-[200px] object-cover"
        />
      </Link>

      <p className="ml-5 mt-5 px-1 bg-black text-white inline-block text-sm">
        {category}
      </p>
      <div className="p-5">
        <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="text-sm text-gray-700 tracking-tight mb-3">
          {description}
        </p>

        <Link
          href={`/blogs/${id}`}
          className="flex items-center gap-1 font-semibold text-center py-2"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
