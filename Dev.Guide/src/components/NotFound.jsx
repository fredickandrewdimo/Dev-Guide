import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center text-white">
      <h1 className="font-bold text-6xl mb-5 md:text-9xl">404</h1>
      <h2 className="text-5xl mb-5">Ooops!</h2>
      <h2 className="text-5xl md:text-7xl font-bold mb-5">Page Not Found</h2>
      <p className="text-gray-400 mb-8 text-lg md:text-xl">
        This page doesn't exist or was removed!<br></br>We suggest you back to
        home.
      </p>
      <Link
        to="/"
        className="bg-green-400 text-neutral-900 mt-16 py-4 px-6 md:py-3 md:px-12 rounded font-bold hover:bg-green-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
