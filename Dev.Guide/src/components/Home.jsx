import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title:
        "From Zero to Front End Hero: A Beginner's Guide to Web Development",
      body: "Lorem ipsum...",
      author: "Andrew",
      id: 1,
    },
    {
      title: "A Step-by-Step Guide to Becoming a Front End Developer",
      body: "Lorem ipsum...",
      author: "Andrew",
      id: 2,
    },
    {
      title:
        "Mastering JavaScript in 2023: A Comprehensive Guide for Beginners",
      body: "Lorem ipsum...",
      author: "Andrew",
      id: 3,
    },
  ]);

  return (
    <div className="flex-col text-center">
      <h1 className="text-white text-6xl font-bold">
        Empower Fellow Developers
      </h1>
      <p className="text-gray-400 mt-7 text-xl">
        Share Your Knowledge with DEV.GUIDE!
      </p>
      <button className="text-white py-3 px-4 bg-green-600 font-bold rounded text-xl mt-8">
        Create Now
      </button>
      <div className="mt-32">
        <h1 className="text-4xl font-bold text-white">ALL GUIDES</h1>
        <div className="guide-container mt-10 text-white md:w-4/5 mx-auto text-left">
          {blogs.map((blog) => (
            <div
              className="guide-preview border-2 my-5 rounded p-5 hover:border-green-600 hover:cursor-pointer"
              key={blog.id}
            >
              <h2 className="font-bold text-xl">{blog.title}</h2>
              <p className="mt-3 text-lg">Written by {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
