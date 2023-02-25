import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const GuideDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="text-white">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="md:w-4/5 m-auto">
          <h2 className="text-2xl md:text-4xl font-bold">{blog.title}</h2>
          <p className="mt-4 mb-8 text-lg md:text-xl">
            Written by {blog.author}
          </p>
          <div className="text-base md:text-lg">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default GuideDetails;
