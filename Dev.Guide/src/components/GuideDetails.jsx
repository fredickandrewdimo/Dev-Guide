import { useHistory, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const GuideDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/guides");
    });
  };

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
          <button
            onClick={handleDelete}
            className="bg-green-400 text-neutral-900 mt-16 py-2 px-4 md:py-3 md:px-12 rounded font-bold hover:bg-green-600"
          >
            DELETE
          </button>
        </article>
      )}
    </div>
  );
};

export default GuideDetails;
