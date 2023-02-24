import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto w-11/12 md:w-9/12 py-5">
      <h1 className="text-white font-bold text-2xl">DEV.GUIDE</h1>
      <div className="text-lg text-white">
        <a className="mx-2" href="/">
          Home
        </a>
        <a className="mx-2" href="/blogs">
          Blogs
        </a>
        <a
          href="/create"
          className="mx-2 py-2 px-4 rounded bg-white text-neutral-900 font-bold"
        >
          Create
        </a>
      </div>
    </div>
  );
};

export default Navbar;
