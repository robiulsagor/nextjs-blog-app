import Link from "next/link";

const Header = () => {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="text-2xl sm:text-3xl font-medium">
          blogger
        </Link>
        <button className="border border-black py-1 px-3 sm:py-3 sm:px-6 font-medium shadow-[-7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:-translate-x-2 active:shadow-none text-xs sm:text-base">
          Get Started
        </button>
      </div>

      <div className="text-center my-10">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 w-[80%] md:w-[60%] mx-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit earum in quod error qui sint obcaecati minima quia
          adipisci. Deleniti vitae natus
        </p>
        <form className="max-w-[500px] mx-auto border border-black mt-10 flex justify-between scale-75 sm:scale-100 shadow-[-7px_7px_0px_0px_rgba(0,0,0,1)]">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full  pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black px-4 py-4 sm:px-8 active:bg-gray-400 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
