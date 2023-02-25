import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import GuideList from "./GuideList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="flex-col text-center">
      <h1 className="text-white text-5xl md:text-6xl font-bold">
        Empower Fellow Developers
      </h1>
      <p className="text-gray-400 mt-7 text-xl md:text-2xl">
        Share Your Knowledge with DEV.GUIDE!
      </p>
      <button className="text-neutral-900 py-3 px-4 bg-green-400 font-bold rounded text-lg md:text-xl mt-8 hover:bg-green-700">
        Create Now
      </button>
      <div className="mt-32">
        <h1 className="text-2xl md:text-4xl font-bold text-white ">
          ALL GUIDES
        </h1>
        <div className="guide-container mt-10 text-white md:w-4/5 mx-auto text-left">
          {error && (
            <div className="text-center text-xl text-red-400">{error}</div>
          )}
          {isPending && <div className="text-center text-xl">Loading....</div>}
          {blogs && <GuideList blogs={blogs} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
