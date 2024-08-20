/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Footer from "@/app/Components/Footer";
import LoadingFullPage from "@/app/Components/LoadingFullPage";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${params.id}`);
      const data = await res.json();
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return loading ? (
    <LoadingFullPage />
  ) : data ? (
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
            width={55}
            height={55}
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
          className="border-4 border-white rounded-sm max-h-[620px] object-cover"
        />
        <p
          className="text-lg mt-5 blog-content"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>

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
