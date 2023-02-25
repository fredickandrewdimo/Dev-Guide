const GuideList = ({ blogs }) => {
  return (
    <div className="guide-list">
      {blogs.map((blog) => (
        <div
          className="guide-preview border-2 my-5 rounded p-5 hover:border-green-400 hover:cursor-pointer hover:text-green-400"
          key={blog.id}
        >
          <h2 className="font-bold text-lg md:text-xl">{blog.title}</h2>
          <p className="mt-3 text-base md:text-lg">Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default GuideList;
