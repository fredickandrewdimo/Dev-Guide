import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto w-11/12 md:w-9/12 py-5">
      <h1 className="text-white font-bold text-2xl">DEV.GUIDE</h1>
      <div className="text-lg text-white">
        <a className="mx-2" href="#">
          Home
        </a>
        <a className="mx-2" href="#">
          Blogs
        </a>
        <button className="mx-2 py-2 px-3 rounded bg-white text-neutral-900 font-bold">
          Create
        </button>
      </div>
    </div>
  );
};

export default Navbar;
