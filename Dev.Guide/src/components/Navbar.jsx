import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto w-11/12 md:w-8/12 py-5">
      <h1 className="text-white font-bold text-xl">DEV.GUIDE</h1>
      <div className="text-lg text-white text-base">
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/guides" className="mx-2">
          Guides
        </Link>
        <Link
          to="/create"
          className="ml-2 py-2 px-4 rounded bg-white text-neutral-900 hover:bg-gray-200 font-bold"
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
