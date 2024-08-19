import adminImg from "@/app/Assets/18.jpeg";
import Image from "next/image";
import Sidebar from "../Components/AdminComponents/Sidebar";

import { Outfit } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function AdminLayout({ children }) {
  return (
    <div className={outfit.className}>
      <ToastContainer />
      <div className=" relative transition duration-300">
        <Sidebar />
        <div className="ml-0 md:ml-[280px] lg:ml-[380px] relative">
          <div className="flex justify-between px-4 py-2 md:px-12 h-[60px] items-center border-b border-black fixed top-0 bg-gray-300  w-full md:w-[calc(100vw-280px)] lg:w-[calc(100vw-380px)]">
            <h2 className="text-2xl text-gray-800 font-semibold px-2 md:px-4  inline-block  ">
              Admin Panel
            </h2>

            <Image
              src={adminImg}
              alt="admin img"
              width={50}
              height={50}
              className="rounded-full object-cover w-[50px] h-[50px] mr-20 md:mr-0"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
