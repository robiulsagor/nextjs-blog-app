"use client";

import { Edit, MailIcon, Menu, PlusCircleIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="absolute right-3 top-4 md:hidden cursor-pointer z-50">
        <Menu size={32} onClick={() => setShowMenu(true)} />
      </div>
      {/* menu button  for small screens */}

      <div
        className={`border-r border-black w-[280px]  md:left-0  md:block  md:w-[280px] lg:w-[380px]  h-[100vh] bg-gray-100 fixed transition duration-300 z-50 ${
          showMenu ? "right-0" : "-right-[280px]"
        }`}
      >
        <X
          size={32}
          onClick={() => setShowMenu(false)}
          className="absolute right-3 top-4 md:hidden cursor-pointer"
        />
        {/* menu close button */}

        <div className="border-b border-black h-[60px] flex items-center">
          <Link
            href={"/admin"}
            className="text-2xl text-gray-800 font-semibold px-2 md:px-4  inline-block  "
          >
            blogger
          </Link>
        </div>
        {/* top page link  */}

        <div className="my-10  w-[80%] ml-auto flex flex-col gap-7 text">
          <Link
            href="/admin/addBlog"
            className={`sidebar-link ${path === "addBlog" && "active"}`}
          >
            <PlusCircleIcon />
            Add Blog
          </Link>
          <Link
            href="/admin/blogList"
            className={`sidebar-link ${path === "blogList" && "active"}`}
          >
            <Edit />
            View Blogs
          </Link>
          <Link
            href="/admin/subscriptions"
            className={`sidebar-link ${path === "subscriptions" && "active"}`}
          >
            <MailIcon />
            Subscriptions
          </Link>
          {/* sidebar links ends here */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
