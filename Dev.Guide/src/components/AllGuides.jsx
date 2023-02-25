import useFetch from "../customHooks/useFetch";
import GuideList from "./GuideList";

const AllGuides = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="all-guides text-center">
      <h1 className="text-white font-bold text-4xl">All GUIDES</h1>
      <div className="guide-container mt-10 text-white md:w-4/5 mx-auto text-left">
        {error && (
          <div className="text-center text-xl text-red-400">{error}</div>
        )}
        {isPending && <div className="text-center text-xl">Loading....</div>}
        {blogs && <GuideList blogs={blogs} />}
      </div>
    </div>
  );
};

export default AllGuides;
