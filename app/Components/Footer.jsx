import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-5 sm:gap-0 sm:flex-row bg-black py-10 text-gray-400">
      <h2 className=" font-semibold text-xl">blogger</h2>
      <p>All rights reserved. Copyright @blogger</p>
      <div className="flex gap-3 items-center">
        <Facebook
          scale={2}
          className="bg-gray-400 text-black rounded-full p-1 cursor-pointer text-[20px]"
        />
        <Twitter className="bg-gray-400 text-black rounded-full p-1 cursor-pointer" />
        <Instagram className="bg-gray-400 text-black rounded-full p-1 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
