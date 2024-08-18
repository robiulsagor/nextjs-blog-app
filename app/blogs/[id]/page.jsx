"use client";
import { blogData } from "@/app/Assets/assets";
import Footer from "@/app/Components/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchPost = () => {
    for (let i = 0; i < blogData.length; i++) {
      if (Number(params.id) === blogData[i].id) {
        setData(blogData[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-300 px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-2xl sm:text-3xl font-medium">
            blogger
          </Link>
          <button className="border border-black py-1 px-3 sm:py-3 sm:px-6 font-medium shadow-[-7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:-translate-x-2 active:shadow-none text-xs sm:text-base">
            Get Started
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl md:text-5xl font-semibold max-w-[700px] mx-auto ">
            {data?.title}
          </h1>
          <Image
            src={data?.author_img}
            alt=""
            className="w-14 h-14 rounded-full mx-auto mt-10 border-2 border-white"
          />

          <p className="text-lg mt-1 max-w-[740px] mx-auto">{data?.author}</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-[-100px]">
        <Image
          width={1280}
          height={720}
          src={data?.image}
          alt=""
          className="border-4 border-white rounded-sm"
        />
        <h2 className="text-[26px] font-bold my-8">Introduction</h2>
        <p className="text-lg ">{data?.description}</p>

        <h3 className="text-[18px] font-bold my-8">
          Some other related blogs. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis, maxime?
        </h3>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptates libero sequi autem voluptatum numquam nihil placeat
          voluptate reprehenderit nostrum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia, sapiente itaque autem eius
          voluptatum aut.
        </p>

        <h3 className="text-[18px] font-bold my-8">subtitle:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          maxime odit vitae ea eaque delectus in facere fugiat. Assumenda
          placeat accusamus ad ab iste! Non.
        </p>

        <h3 className="text-[18px] font-bold my-8">
          Some other related blogs. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis, maxime?
        </h3>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptates libero sequi autem voluptatum numquam nihil placeat
          voluptate reprehenderit nostrum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia, sapiente itaque autem eius
          voluptatum aut.
        </p>

        <h3 className="text-[18px] font-bold my-8">subtitle:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          maxime odit vitae ea eaque delectus in facere fugiat. Assumenda
          placeat accusamus ad ab iste! Non.
        </p>

        <h3 className="text-[18px] font-bold my-8">
          Some other related blogs. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis, maxime?
        </h3>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptates libero sequi autem voluptatum numquam nihil placeat
          voluptate reprehenderit nostrum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia, sapiente itaque autem eius
          voluptatum aut.
        </p>

        <h3 className="text-[18px] font-bold my-8">subtitle:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          maxime odit vitae ea eaque delectus in facere fugiat. Assumenda
          placeat accusamus ad ab iste! Non.
        </p>

        <h3 className="text-[18px] font-bold my-8">
          Some other related blogs. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corporis, maxime?
        </h3>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptates libero sequi autem voluptatum numquam nihil placeat
          voluptate reprehenderit nostrum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia, sapiente itaque autem eius
          voluptatum aut.
        </p>

        <h3 className="text-[18px] font-bold my-8">Conclusion:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          maxime odit vitae ea eaque delectus in facere fugiat. Assumenda
          placeat accusamus ad ab iste! Non.
        </p>

        <div className="my-24">
          <h2 className="text-[20px] font-semibold text-gray-700">
            Share this article on social media
          </h2>
          <div className="mt-4 flex gap-6">
            <Facebook
              size={36}
              className=" p-[6px] rounded-full shadow-[0px_4px_10px_#cfcfcf] hover:shadow-[0px_4px_10px_#707070] transition cursor-pointer"
            />
            <Twitter
              size={36}
              className=" p-[6px] rounded-full shadow-[0px_4px_10px_#cfcfcf] hover:shadow-[0px_4px_10px_#707070] transition  cursor-pointer"
            />
            <Instagram
              size={36}
              className=" p-[6px] rounded-full shadow-[0px_4px_10px_#cfcfcf] hover:shadow-[0px_4px_10px_#707070] transition  cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <div>
      <h1>Blog not found</h1>
    </div>
  );
};

export default BlogPage;
